// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
import type { LatLngLiteral } from 'leaflet'

import configuration from 'shared/services/configuration/configuration'
import { wgs84ToRd } from 'shared/services/crs-converter/crs-converter.js'
import {
  formatGoogleResponse,
  pdokResponseFieldList,
} from 'shared/services/map-location'
import type { PdokResponse } from 'shared/services/map-location'
import type {
  GoogleGeocodingResponse,
  GoogleReverseGeocodingRequest,
} from 'types/google/geocoding'

const flParams = pdokResponseFieldList.join(',')

// Create the base URL
const baseUrl = configuration.map.pdok.reverse.startsWith('http')
  ? configuration.map.pdok.reverse
  : `${window.location.origin}${configuration.map.pdok.reverse}`

export const serviceURL = `${baseUrl}?type=adres&rows=1&fl=${flParams}`

export const formatRequest = (
  baseUrl: URL | string,
  wgs84point: LatLngLiteral,
  distance = configuration.map.pdok.distance
) => {
  const { x, y } = wgs84ToRd(wgs84point)
  const urlString = typeof baseUrl === 'string' ? baseUrl : baseUrl.toString()
  return `${urlString}&X=${x}&Y=${y}&distance=${distance}`
}

const reverseGeocoderService = async (
  location: LatLngLiteral
): Promise<PdokResponse | undefined> => {
  // Use configuration URL (will be set via helm chart to geo-dev URL)
  const baseUrl = configuration.map.pdok.reverse.startsWith('http')
    ? configuration.map.pdok.reverse
    : `${window.location.origin}${configuration.map.pdok.reverse}`

  const requestBody: GoogleReverseGeocodingRequest = {
    latitude: location.lat,
    longitude: location.lng,
    countryCode: 'IN', // Default to India, could be made configurable
    city: 'jaipur', // Default city, could be made configurable
  }

  const result: GoogleGeocodingResponse = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => res.json())
    // make sure to catch any error responses from the geocoder service
    .catch(() => ({
      response: [
        {
          http: 404,
          description: 'Request failed due to network error',
        },
      ],
    }))

  const formattedResponse = formatGoogleResponse(result)

  return formattedResponse[0]
}

export default reverseGeocoderService
