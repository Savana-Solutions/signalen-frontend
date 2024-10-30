// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
import type { LatLngLiteral } from 'leaflet'

import configuration from 'shared/services/configuration/configuration'
import { wgs84ToRd } from 'shared/services/crs-converter/crs-converter'
import {
  pdokResponseFieldList,
  formatPDOKResponse,
} from 'shared/services/map-location'
import type { PdokResponse } from 'shared/services/map-location'
import type { RevGeo } from 'types/pdok/revgeo'

const flParams = pdokResponseFieldList.join(',')
export const serviceURL = `${configuration.map.pdok.reverse}?type=adres&rows=1&fl=${flParams}`

export const formatRequest = (
  baseUrl: URL | string,
  wgs84point: LatLngLiteral,
  distance = 50
) => {
  const { x, y } = wgs84ToRd(wgs84point)
  return `${new URL(baseUrl).toString()}&X=${x}&Y=${y}&distance=${distance}`
}

const reverseGeocoderService = async (
  location: LatLngLiteral
): Promise<PdokResponse | undefined> => {
  const url = formatRequest(new URL(serviceURL), location)

  try {
    const result: RevGeo = await fetch(url).then((res) => res.json())

    const formattedResponse = formatPDOKResponse(result)

    // Only return if we have a valid address
    if (formattedResponse[0]?.data?.address) {
      return formattedResponse[0]
    }

    return undefined
  } catch (error) {
    return undefined
  }
}

export default reverseGeocoderService
