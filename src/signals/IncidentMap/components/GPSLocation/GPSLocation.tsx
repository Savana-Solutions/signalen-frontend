/* SPDX-License-Identifier: MPL-2.0 */
/* Copyright (C) 2022 - 2023 Gemeente Amsterdam */

import type { LatLngLiteral } from 'leaflet'

import GPSButton from '../../../../components/GPSButton'
import configuration from '../../../../shared/services/configuration/configuration'
import type { LocationResult } from '../../../../types/location'

export interface Props {
  setNotification: (mapMessage: JSX.Element | string) => void
  setCoordinates: (coordinates: LatLngLiteral) => void
}

export const GPSLocation = ({ setNotification, setCoordinates }: Props) => (
  <GPSButton
    tabIndex={0}
    onLocationSuccess={(location: LocationResult) => {
      const coordinates = {
        lat: location.latitude,
        lng: location.longitude,
      }
      setCoordinates(coordinates)
    }}
    onLocationError={() =>
      setNotification(
        <>
          <strong>
            {`${configuration.language.siteAddress} has no permission to use your location.`}
          </strong>
          <p>
            This can be changed in the preferences or settings of your browser
            or system.
          </p>
        </>
      )
    }
    onLocationOutOfBounds={() =>
      setNotification(
        'Your location is outside the map and therefore not visible'
      )
    }
  />
)
