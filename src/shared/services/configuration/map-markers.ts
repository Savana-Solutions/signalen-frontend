// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2022 Gemeente Amsterdam
/* eslint-disable global-require */
import L from 'leaflet'

import { StatusCode } from 'types/status-code'

export enum StatusColorGroup {
  REPORTED = '#666666', // Original dark gray/black
  IN_PROGRESS = '#0096FF', // Blue
  COMPLETED = '#00A03C', // Green
  CANCELLED = '#EC0000', // Red
}

export const statusToColorGroup: Record<StatusCode, StatusColorGroup> = {
  [StatusCode.Gemeld]: StatusColorGroup.REPORTED,
  [StatusCode.TeVerzenden]: StatusColorGroup.REPORTED,

  [StatusCode.Afwachting]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.Behandeling]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.Ingepland]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.ReactieGevraagd]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.ReactieOntvangen]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.Verzonden]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.DoorgezetNaarExtern]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.VerzoekTotHeropenen]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.Heropend]: StatusColorGroup.IN_PROGRESS,
  [StatusCode.VerzoekTotAfhandeling]: StatusColorGroup.IN_PROGRESS,

  [StatusCode.Afgehandeld]: StatusColorGroup.COMPLETED,
  [StatusCode.AfgehandeldExtern]: StatusColorGroup.COMPLETED,

  [StatusCode.Geannuleerd]: StatusColorGroup.CANCELLED,
  [StatusCode.Gesplitst]: StatusColorGroup.CANCELLED,
  [StatusCode.VerzendenMislukt]: StatusColorGroup.CANCELLED,
}

export const getIncidentIcon = (status?: StatusCode) => {
  // For REPORTED status or undefined, use the original SVG colors
  if (!status || statusToColorGroup[status] === StatusColorGroup.REPORTED) {
    return L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
        <g fill="none" fill-rule="evenodd">
          <path fill="#666" d="M20.27 1C13.374 1 8 6.27 8 12.946 8 19.927 20.27 38.69 20.27 38.69s12.267-18.897 12.267-25.744C32.537 6.28 27.264 1 20.27 1m0 3.382c5.014 0 8.794 3.682 8.794 8.564 0 .803-.41 4.173-5.703 13.81a172.15 172.15 0 0 1-3.1 5.394 166.914 166.914 0 0 1-3.086-5.35c-5.147-9.34-5.702-12.8-5.702-13.854 0-2.33.9-4.493 2.533-6.087 1.637-1.597 3.862-2.477 6.264-2.477"/>
          <path fill="#FFF" d="M19.265 35.392C15.373 28.977 8.736 17.045 8.736 12.263c0-5.903 4.627-10.527 10.534-10.527 6.004 0 10.53 4.526 10.53 10.527 0 4.69-6.643 16.678-10.535 23.13"/>
          <path fill="#000" d="M19.27 0C12.374 0 7 5.41 7 12.264c0 7.167 12.27 26.43 12.27 26.43s12.267-19.4 12.267-26.43C31.537 5.422 26.264 0 19.27 0m0 3.473c5.014 0 8.794 3.779 8.794 8.79 0 .825-.41 4.285-5.703 14.178a177.988 177.988 0 0 1-3.1 5.538 172.554 172.554 0 0 1-3.086-5.491c-5.147-9.59-5.702-13.142-5.702-14.224 0-2.393.9-4.612 2.533-6.249 1.637-1.64 3.862-2.542 6.264-2.542"/>
          <path fill="#000" d="M22.462 11.948a3.266 3.266 0 1 1-6.533 0 3.266 3.266 0 0 1 6.533 0"/>
        </g>
      </svg>`,
      className: 'incident-marker',
      iconSize: [39, 39],
    })
  }

  // For other statuses, change the white part to the status color
  const color = statusToColorGroup[status]

  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
      <g fill="none" fill-rule="evenodd">
        <path fill="#666" d="M20.27 1C13.374 1 8 6.27 8 12.946 8 19.927 20.27 38.69 20.27 38.69s12.267-18.897 12.267-25.744C32.537 6.28 27.264 1 20.27 1m0 3.382c5.014 0 8.794 3.682 8.794 8.564 0 .803-.41 4.173-5.703 13.81a172.15 172.15 0 0 1-3.1 5.394 166.914 166.914 0 0 1-3.086-5.35c-5.147-9.34-5.702-12.8-5.702-13.854 0-2.33.9-4.493 2.533-6.087 1.637-1.597 3.862-2.477 6.264-2.477"/>
        <path fill="${color}" d="M19.265 35.392C15.373 28.977 8.736 17.045 8.736 12.263c0-5.903 4.627-10.527 10.534-10.527 6.004 0 10.53 4.526 10.53 10.527 0 4.69-6.643 16.678-10.535 23.13"/>
        <path fill="#000" d="M19.27 0C12.374 0 7 5.41 7 12.264c0 7.167 12.27 26.43 12.27 26.43s12.267-19.4 12.267-26.43C31.537 5.422 26.264 0 19.27 0m0 3.473c5.014 0 8.794 3.779 8.794 8.79 0 .825-.41 4.285-5.703 14.178a177.988 177.988 0 0 1-3.1 5.538 172.554 172.554 0 0 1-3.086-5.491c-5.147-9.59-5.702-13.142-5.702-14.224 0-2.393.9-4.612 2.533-6.249 1.637-1.64 3.862-2.542 6.264-2.542"/>
        <path fill="#000" d="M22.462 11.948a3.266 3.266 0 1 1-6.533 0 3.266 3.266 0 0 1 6.533 0"/>
      </g>
    </svg>`,
    className: 'incident-marker',
    iconSize: [39, 39],
  })
}

export const smallMarkerIcon = L.icon({
  iconUrl: '/assets/images/icon-select-marker.svg',
  iconSize: [20, 20],
  iconAnchor: [10, 19],
  className: 'map-marker-select-small',
})

export const markerIcon = L.icon({
  iconUrl: '/assets/images/icon-select-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 39],
  className: 'map-marker-select',
})

export const selectedMarkerIcon = L.icon({
  iconUrl: '/assets/images/feature-selected-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 39],
})

export const incidentIcon = L.icon({
  iconUrl: '/assets/images/icon-incident-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 39],
  className: 'map-marker-incident',
})

export const pointerSelectIcon = L.icon({
  iconUrl: '/assets/images/area-map/icon-pin-red.svg',
  iconAnchor: [16, 42],
})

const ANCHOR: L.PointExpression = [12, 32]

export const openIncidentIcon = L.icon({
  iconUrl: '/assets/images/area-map/icon-pin.svg',
  iconAnchor: ANCHOR,
})

export const closedIncidentIcon = L.icon({
  iconUrl: '/assets/images/area-map/icon-pin-green.svg',
  iconAnchor: ANCHOR,
})

export const currentIncidentIcon = L.icon({
  iconUrl: '/assets/images/area-map/icon-cross.svg',
  iconAnchor: [48, 48],
})

export const defaultIcon = '/assets/images/icon-incident-marker.svg'

/* istanbul ignore next */
export const dynamicIcon = (iconUrl?: string) =>
  L.icon({
    iconUrl: iconUrl ?? defaultIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 39],
    className: 'map-marker-incident',
  })
