// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2021 - 2023 Gemeente Amsterdam
import { useCallback, useContext, useState } from 'react'
import type { FC } from 'react'

import { Marker } from '@amsterdam/arm-core'
import { useMapInstance } from '@amsterdam/react-maps'
import type { FeatureCollection } from 'geojson'
import L from 'leaflet'

import configuration from 'shared/services/configuration/configuration'
import { featureToCoordinates } from 'shared/services/map-location'
import reverseGeocoderService from 'shared/services/reverse-geocoder'
import SelectContext from 'signals/incident/components/form/MapSelectors/Asset/context'
import WfsDataContext from 'signals/incident/components/form/MapSelectors/Asset/Selector/WfsLayer/context'
import type {
  Feature,
  Item,
  FeatureStatusType,
} from 'signals/incident/components/form/MapSelectors/types'
import type { Geometrie, Location } from 'types/incident'

import StatusLayer from '../../Asset/Selector/StatusLayer'
import { getFeatureStatusType } from '../../Asset/Selector/StatusLayer/utils'

export const CaterpillarLayer: FC = () => {
  const { features } = useContext<FeatureCollection>(WfsDataContext)
  const { selection, meta, setItem, removeItem } = useContext(SelectContext)
  const mapInstance = useMapInstance()
  const [popup, setPopup] = useState<L.Popup>()

  const getMarker = useCallback(
    (feat: any, featureStatusTypes: FeatureStatusType[]) => {
      const feature = feat as Feature
      const coordinates = featureToCoordinates(feature.geometry as Geometrie)
      // Caterpillar layer renders only a single feature type (oak tree)
      const featureType = meta.featureTypes[0]

      const featureId = feature.id

      const isSelected = Boolean(
        selection?.find((item) => item.id?.toString() === featureId?.toString())
      )

      const featureStatusType = getFeatureStatusType(
        feature,
        featureStatusTypes
      )
      const description = featureStatusType
        ? featureStatusType.description
        : featureType.description

      const altText = isSelected
        ? `${description}, is geselecteerd (${featureId})`
        : `${description} (${featureId})`

      const icon = L.icon({
        iconSize: [40, 40],
        iconUrl: isSelected
          ? '/assets/images/feature-selected-marker.svg'
          : featureType.icon.iconUrl,
      })

      const onClick = async () => {
        // Check if coordinate is valid
        const response = await reverseGeocoderService(coordinates)

        if (response?.data?.coordinateIsValid === false) {
          if (popup) {
            popup.remove()
          }

          const gemeente = configuration.map?.municipality || ''
          const newPopup = L.popup()
            .setLatLng(coordinates)
            .setContent(`Deze app werkt alleen binnen de gemeente ${gemeente}.`)
            .openOn(mapInstance)

          setPopup(newPopup)
          return
        }

        // Remove existing popup if any
        if (popup) {
          popup.remove()
          setPopup(undefined)
        }

        const { description, typeValue } = featureType
        const location: Location = {
          coordinates,
        }

        const item: Item = {
          id: featureId,
          type: typeValue,
          description,
          status: featureStatusType?.typeValue,
          coordinates,
          label: [description, featureId].filter(Boolean).join(' - '),
        }

        if (isSelected) {
          removeItem(item)
          return
        }

        meta.extraProperties?.forEach((propertyKey) => {
          item[propertyKey] = feature.properties[propertyKey]
        })

        setItem(item, location)

        if (response) {
          location.address = response.data.address
          item.address = response.data.address
        }

        setItem(item, location)
      }

      return (
        <Marker
          key={`${featureId}-${isSelected}`}
          options={{
            icon,
            alt: altText,
            keyboard: false,
          }}
          latLng={coordinates}
          events={{
            click: onClick,
          }}
        />
      )
    },
    [
      meta.extraProperties,
      meta.featureTypes,
      removeItem,
      selection,
      setItem,
      popup,
      mapInstance,
    ]
  )

  const featureStatusTypes = meta.featureStatusTypes || []

  const statusFeatures = features.filter(
    (feature) => getFeatureStatusType(feature, featureStatusTypes) !== undefined
  )

  // Filter out features with invalid coordinates before rendering
  const validFeatures = features.filter(async (feature: any) => {
    if (!feature.geometry.coordinates.length) return false

    const coordinates = featureToCoordinates(feature.geometry as Geometrie)
    const response = await reverseGeocoderService(coordinates)
    return response?.data?.coordinateIsValid !== false
  })

  return (
    <>
      {validFeatures.map((feat) => getMarker(feat, featureStatusTypes))}

      {statusFeatures.length > 0 && featureStatusTypes && (
        <StatusLayer
          statusFeatures={statusFeatures as Feature[]}
          featureStatusTypes={featureStatusTypes}
        />
      )}
    </>
  )
}

export default CaterpillarLayer
