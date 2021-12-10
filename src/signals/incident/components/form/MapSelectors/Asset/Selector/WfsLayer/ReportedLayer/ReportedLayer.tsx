// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2021 Gemeente Amsterdam
import { useCallback, useContext } from 'react'
import L from 'leaflet'
import '../style.css'

import type { FeatureCollection } from 'geojson'
import type { FC } from 'react'
import {
  DataLayerProps,
  Feature,
} from 'signals/incident/components/form/MapSelectors/Asset/types'
import { Marker } from '@amsterdam/arm-core'
import { getIconUrl } from 'signals/incident/components/form/MapSelectors/utils'
import WfsDataContext from '../context'

const REPORTED_CLASS_MODIFIER = 'marker-reported'

const ReportedLayer: FC<DataLayerProps> = ({ featureTypes }) => {
  const data = useContext<FeatureCollection>(WfsDataContext)

  const getFeatureType = useCallback(
    (feat: any) => {
      const feature = feat as Feature
      if (feature.properties.meldingstatus === 1) {
        return featureTypes.find(({ typeValue }) => typeValue === 'reported')
      }
    },
    [data, featureTypes]
  )

  const getMarker = useCallback(
    (feat: any) => {
      const feature = feat as Feature
      const [lng, lat] = feature.geometry.coordinates
      const latLng = { lat, lng }
      const featureType = getFeatureType(feature)
      if (!featureType) return
      const iconSvg = featureType && featureType.icon.iconSvg

      const iconSize = [20, 20] as [number, number]

      const icon = L.icon({
        iconSize,
        iconUrl: getIconUrl(iconSvg),
        className: REPORTED_CLASS_MODIFIER,
      })

      return (
        <Marker
          key={`${featureType && feature.properties[featureType.idField]}`}
          latLng={latLng}
          options={{
            zIndexOffset: 1000,
            icon,
            alt: `${featureType.description} - ${
              feature.properties[featureType.idField]
            }`,
          }}
        />
      )
    },
    [data, featureTypes]
  )

  return <>{data.features.map(getMarker)}</>
}

export default ReportedLayer
