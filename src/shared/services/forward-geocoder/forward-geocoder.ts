// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
import configuration from 'shared/services/configuration/configuration'
import { formatGoogleResponse } from 'shared/services/map-location'
import type { PdokResponse } from 'shared/services/map-location'
import type {
  GoogleGeocodingResponse,
  GoogleForwardGeocodingRequest,
} from 'types/google/geocoding'

const forwardGeocoderService = async (
  searchString: string
): Promise<PdokResponse[]> => {
  // Use configuration URL (will be set via helm chart to geo-dev URL)
  const baseUrl = configuration.map.pdok.suggest.startsWith('http')
    ? configuration.map.pdok.suggest
    : `${window.location.origin}${configuration.map.pdok.suggest}`

  const requestBody: GoogleForwardGeocodingRequest = {
    searchString,
    countryCode: 'IN', // Default to India, could be made configurable
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

  return formatGoogleResponse(result)
}

export default forwardGeocoderService
