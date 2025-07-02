// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2022 Gemeente Amsterdam, Vereniging van Nederlandse Gemeenten
import { useEffect, useState } from 'react'
import { Marker } from '@amsterdam/react-maps'
import PropTypes from 'prop-types'

import Map from 'components/Map'
import { markerIcon } from 'shared/services/configuration/map-markers'
import MAP_OPTIONS from 'shared/services/configuration/map-options'
import { apiFeatureToCoordinates } from 'shared/services/map-location'
import reverseGeocoderService from 'shared/services/reverse-geocoder'
import { locationType } from 'shared/types'

const MapDetail = ({
  value,
  className,
  zoom,
  icon,
  canFocusMarker,
  hasZoomControls,
}) => {
  const [isValidCoordinate, setIsValidCoordinate] = useState(true)

  const { lat, lng } = value?.geometrie
    ? apiFeatureToCoordinates(value.geometrie)
    : {}

  // Validate coordinates using the reverse geocoder service
  useEffect(() => {
    if (lat && lng) {
      reverseGeocoderService({ lat, lng })
        .then((response) => {
          if (
            !response ||
            !response.data ||
            response.data.coordinateIsValid === false
          ) {
            setIsValidCoordinate(false)
          } else {
            setIsValidCoordinate(true)
          }
        })
        .catch(() => {
          setIsValidCoordinate(false)
        })
    }
  }, [lat, lng])

  const mapOptions = {
    ...MAP_OPTIONS,
    zoom,
    attributionControl: false,
    center: [lat, lng],
  }

  return lat && lng && isValidCoordinate ? (
    <Map
      data-testid="map-detail"
      mapOptions={mapOptions}
      className={className}
      hasZoomControls={hasZoomControls}
    >
      <Marker
        args={[{ lat, lng }]}
        options={{ icon, keyboard: canFocusMarker }}
      />
    </Map>
  ) : null
}

MapDetail.defaultProps = {
  className: '',
  hasZoomControls: false,
  canFocusMarker: true,
  icon: markerIcon,
}

MapDetail.propTypes = {
  className: PropTypes.string,
  hasZoomControls: PropTypes.bool,
  icon: PropTypes.shape({}), // leaflet icon object
  canFocusMarker: PropTypes.bool,
  value: locationType.isRequired,
  zoom: PropTypes.number.isRequired,
}

export default MapDetail
