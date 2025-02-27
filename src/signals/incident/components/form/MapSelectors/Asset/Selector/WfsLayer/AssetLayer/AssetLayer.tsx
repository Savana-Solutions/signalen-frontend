import { useCallback, useContext, useState } from 'react'
import type { FC } from 'react'

import { Marker } from '@amsterdam/arm-core'
import type { FeatureCollection } from 'geojson'
import L from 'leaflet'
import 'types/address'

import configuration from 'shared/services/configuration/configuration'
import { featureToCoordinates } from 'shared/services/map-location'
import reverseGeocoderService from 'shared/services/reverse-geocoder'
import AssetSelectContext from 'signals/incident/components/form/MapSelectors/Asset/context'
import type {
  Item,
  Feature,
  FeatureStatusType,
} from 'signals/incident/components/form/MapSelectors/types'
import { FeatureStatus } from 'signals/incident/components/form/MapSelectors/types'
import type { Geometrie, Location } from 'types/incident'
import {
  isTemplateString,
  parseTemplateString,
} from 'utils/parseTemplateString'

import { getFeatureStatusType } from '../../StatusLayer/utils'
import WfsDataContext from '../context'

export const AssetLayer: FC = () => {
  const data = useContext<FeatureCollection>(WfsDataContext)
  const { selection, removeItem, setItem, meta } =
    useContext(AssetSelectContext)
  const { featureTypes } = meta
  const featureStatusTypes = meta.featureStatusTypes || []
  const [popup, setPopup] = useState<L.Popup>()

  const getFeatureType = useCallback(
    (feature: Feature) => {
      return featureTypes.find(
        ({ typeField, typeValue }) =>
          feature.properties[typeField] === typeValue
      )
    },
    [featureTypes]
  )

  const renderMarker = (feat: any, featureStatusTypes: FeatureStatusType[]) => {
    const feature = feat as Feature
    const coordinates = featureToCoordinates(feature?.geometry as Geometrie)

    const featureType = getFeatureType(feature)
    if (!featureType) return null

    const { description, typeValue, idField } = featureType
    const id = feature.properties[idField] || ''
    const isSelected = Boolean(selection?.find((item) => item.id == id))

    const iconUrl = isSelected
      ? '/assets/images/feature-selected-marker.svg'
      : featureType.icon.iconUrl
    const icon = L.icon({
      iconSize: featureType.icon?.options?.iconSize || [40, 40],
      iconUrl: iconUrl || '/assets/images/feature-default-marker.svg',
    })

    const featureStatusType = getFeatureStatusType(feature, featureStatusTypes)

    const label = isTemplateString(description)
      ? parseTemplateString(description, feature.properties)
      : [description, id].filter(Boolean).join(' - ')

    const alt = isTemplateString(description)
      ? parseTemplateString(description, feature.properties)
      : `${featureType.description}${
          isSelected ? ', is geselecteerd' : ''
        } (${id})`

    const parsedDescription = isTemplateString(description)
      ? parseTemplateString(description, feature.properties)
      : description

    const onClick = async () => {
      if (popup) {
        popup.remove()
        setPopup(undefined)
      }

      // Validate coordinates only when clicking
      const response = await reverseGeocoderService(coordinates)
      if (response?.data?.coordinateIsValid === false) {
        const gemeente = configuration.map?.municipality || ''
        const newPopup = L.popup()
          .setLatLng(coordinates)
          .setContent(`Deze app werkt alleen binnen de gemeente ${gemeente}.`)
        setPopup(newPopup)
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(window as any)?.dataLayer?.push({
        event: 'interaction.generic.component.mapInteraction',
        meta: {
          category: 'interaction.generic.component.mapInteraction',
          action: 'objectClick',
          label: label,
        },
      })

      if (typeValue !== FeatureStatus.REPORTED) {
        const location: Location = { coordinates }

        const item: Item = {
          id: id.toString(),
          type: typeValue,
          description: parsedDescription,
          status: featureStatusType?.typeValue,
          label,
          coordinates,
        }

        if (isSelected) {
          removeItem(item)
          return
        }

        if (response) {
          location.address = response.data.address
          item.address = response.data.address
        }

        setItem(item, location)
      }
    }

    return (
      <Marker
        key={`${id}-${isSelected}`}
        options={{
          icon,
          alt,
          keyboard: true,
        }}
        latLng={coordinates}
        events={{
          click: onClick,
          keypress: onClick,
        }}
      />
    )
  }

  return (
    <>{data.features.map((feat) => renderMarker(feat, featureStatusTypes))}</>
  )
}

export default AssetLayer
