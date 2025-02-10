/* eslint-disable no-console */
// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2023 Gemeente Amsterdam
import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { useCallback, useState } from 'react'

import type { LatLngLiteral } from 'leaflet'
import L from 'leaflet'
import { useDispatch, useSelector } from 'react-redux'

import Summary from 'components/Summary'
import configuration from 'shared/services/configuration/configuration'
import reverseGeocoderService from 'shared/services/reverse-geocoder'
import { updateIncident as updateReduxIncident } from 'signals/incident/containers/IncidentContainer/actions'
import { makeSelectIncidentContainer } from 'signals/incident/containers/IncidentContainer/selectors'
import type { Incident, Location } from 'types/incident'

import { AssetSelectProvider } from './context'
import Intro from './Intro'
import Selector from './Selector'
import { UNKNOWN_TYPE, UNREGISTERED_TYPE } from '../constants'
import type {
  FeatureStatusType,
  FeatureType,
  Item,
  Meta,
  SelectableFeature,
} from '../types'

const defaultIconConfig: FeatureType['icon'] = {
  options: {
    className: 'object-marker',
    iconSize: [40, 40],
  },
  iconUrl: '/assets/images/feature-default-marker.svg',
}
const defaultUnregisteredIconConfig: FeatureType['icon'] = {
  options: {
    className: 'object-marker',
    iconSize: [40, 40],
  },
  iconUrl: '/assets/images/feature-unknown-marker.svg',
}

interface UpdatePayload {
  selection?: Item[]
  location?: Location
}

export interface AssetSelectProps {
  value?: {
    selection?: Item[]
    location?: Location
  }
  layer?: FC
  meta: Meta
  parent: {
    meta: {
      featureTypes: FeatureType[]
      featureStatusTypes: FeatureStatusType[]
      incidentContainer: { incident: Pick<Incident, 'location'> }
      maxNumberOfObjects?: number
      updateIncident: (data: { [key: string]: any }) => void
      addToSelection: (data: { [key: string]: any }) => void
      removeFromSelection: (data: { [key: string]: any }) => void
    }
  }
}

const AssetSelect: FC<AssetSelectProps> = ({ value, layer, meta, parent }) => {
  const dispatch = useDispatch()
  const { selection, location } = value || {}
  const [message, setMessage] = useState<string>()
  const [popup, setPopup] = useState<L.Popup>()
  const mapRef = useRef<L.Map>()

  const setMapInstance = useCallback((instance: L.Map) => {
    mapRef.current = instance
  }, [])

  const [selectableFeatures, setSelectableFeatures] = useState<
    SelectableFeature[] | undefined
  >(undefined)
  const { mapActive } = useSelector(makeSelectIncidentContainer)
  const [featureTypes, setFeatureTypes] = useState<FeatureType[]>([])
  const { coordinates, address } = location || {}
  const hasSelection = selection || coordinates
  const { maxNumberOfAssets } = meta

  const updateIncident = useCallback(
    (payload?: UpdatePayload) => {
      parent.meta.updateIncident({
        location: payload?.location,
        [meta.name as string]: payload,
        meta_name: meta.name,
      })
    },
    [meta.name, parent.meta]
  )

  /**
   * Selecting an object on the map
   */
  const setItem = useCallback(
    (selectedItem: Item, itemLocation?: Location) => {
      const payload = {
        selection: [selectedItem],
        location: itemLocation || location,
        maxNumberOfAssets: maxNumberOfAssets || 1,
      }
      parent.meta.addToSelection({
        location: payload.location,
        [meta.name as string]: payload,
        meta_name: meta.name,
      })
    },
    [location, meta.name, parent.meta, maxNumberOfAssets]
  )

  const removeItem = (selectedItem?: Item) => {
    const payload = {
      selection: selectedItem ? [selectedItem] : undefined,
    }

    dispatch(updateReduxIncident({ maxAssetWarning: false }))
    parent.meta.removeFromSelection({
      [meta.name as string]: payload,
      meta_name: meta.name,
    })
  }

  const getUpdatePayload = useCallback(
    (location: Location) => {
      const payload: UpdatePayload = { location, selection }

      const item = selection ? selection[0] : undefined

      if (item?.type === UNKNOWN_TYPE) {
        payload.selection = selection
      } else {
        payload.selection = undefined
      }
      return payload
    },
    [selection]
  )

  /**
   * Callback handler for map clicks; will fetch the address and dispatches both coordinates and
   * address to the global state.
   */
  const fetchLocation = useCallback(
    async (latLng: LatLngLiteral) => {
      const response = await reverseGeocoderService(latLng)

      if (response?.data?.coordinateIsValid === false) {
        if (popup) {
          popup.remove()
        }

        const gemeente = configuration.map?.municipality || ''

        // Only create and open popup if map exists
        if (mapRef.current) {
          const newPopup = L.popup()
            .setLatLng(latLng)
            .setContent(`Deze app werkt alleen binnen de gemeente ${gemeente}.`)

          // Use addTo instead of openOn to avoid the type error
          newPopup.addTo(mapRef.current)
          setPopup(newPopup)
        }
        return
      }

      // Remove existing popup if any
      if (popup) {
        popup.remove()
        setPopup(undefined)
      }

      const location = {
        coordinates: latLng,
        address: response?.data?.address,
      }

      const payload = getUpdatePayload(location)
      updateIncident(payload)
    },
    [popup, getUpdatePayload, updateIncident]
  )

  /**
   * Address auto complete selection
   */
  const setLocation = useCallback(
    async (location: Location) => {
      const response = await reverseGeocoderService(location.coordinates)

      if (response?.data?.coordinateIsValid === false) {
        if (popup) {
          popup.remove()
        }

        const gemeente = configuration.map?.municipality || ''

        if (mapRef.current) {
          const newPopup = L.popup()
            .setLatLng(location.coordinates)
            .setContent(`Deze app werkt alleen binnen de gemeente ${gemeente}.`)
            .addTo(mapRef.current)

          setPopup(newPopup)
        }
        return
      }

      if (popup) {
        popup.remove()
        setPopup(undefined)
      }

      const payload = getUpdatePayload({
        ...location,
        address: response?.data?.address,
      })

      updateIncident(payload)
    },
    [popup, getUpdatePayload, updateIncident]
  )

  useEffect(() => {
    if (!meta.featureTypes.length) return

    setFeatureTypes(
      meta.featureTypes.map((featureType) => {
        const defaultConfig =
          featureType.typeValue === UNREGISTERED_TYPE
            ? defaultUnregisteredIconConfig
            : defaultIconConfig

        return {
          ...featureType,
          icon: {
            ...defaultConfig,
            ...(featureType.icon || {}),
            options: {
              ...defaultConfig.options,
              ...(featureType.icon?.options || {}),
            },
          },
        }
      })
    )
  }, [meta.featureTypes])

  return (
    <AssetSelectProvider
      value={{
        address,
        coordinates,
        layer,
        message,
        selectableFeatures,
        meta: {
          ...meta,
          featureTypes,
        },
        removeItem,
        selection,
        setLocation,
        setItem,
        fetchLocation,
        setMessage,
        setSelectableFeatures,
        popup,
        setPopup,
        map: mapRef.current,
        setMapInstance,
      }}
    >
      {!mapActive && !hasSelection && <Intro />}

      {mapActive && <Selector />}

      {!mapActive && hasSelection && (
        <Summary
          address={address}
          coordinates={coordinates}
          selection={selection}
          featureTypes={featureTypes}
        />
      )}
    </AssetSelectProvider>
  )
}

export default AssetSelect
