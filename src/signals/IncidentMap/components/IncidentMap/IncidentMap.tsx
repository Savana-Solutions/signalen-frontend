/* eslint-disable no-console */
// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2022 - 2023 Gemeente Amsterdam
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { LatLngLiteral, Map as MapType } from 'leaflet'
import L from 'leaflet'
import { throttle, isEqual } from 'lodash'

import { useDeviceMode } from 'hooks/useDeviceMode'
import configuration from 'shared/services/configuration/configuration'
import { dynamicIcon } from 'shared/services/configuration/map-markers'
import MAP_OPTIONS from 'shared/services/configuration/map-options'
import { formatAddress } from 'shared/services/format-address'
import { featureToCoordinates } from 'shared/services/map-location'
import reverseGeocoderService from 'shared/services/reverse-geocoder'
import { MapMessage } from 'signals/incident/components/form/MapSelectors/components/MapMessage'
import type { Bbox } from 'signals/incident/components/form/MapSelectors/hooks/useBoundingBox'

import { Pin } from './Pin'
import {
  StyledMap,
  StyledParagraph,
  StyledViewerContainer,
  TopLeftWrapper,
  Wrapper,
  DrawerContentWrapper,
} from './styled'
import usePaginatedIncidents from './usePaginatedIncidents'
import { getFlyToZoom } from './utils'
import {
  DrawerOverlay,
  DrawerState,
} from '../../../../components/DrawerOverlay'
import type { Filter, Incident, Properties } from '../../types'
import { AddressLocation } from '../AddressLocation'
import { AddressSearchMobile } from '../AddressLocation'
import { DetailPanel } from '../DetailPanel/DetailPanel'
import { FilterPanel } from '../FilterPanel'
import { GPSLocation } from '../GPSLocation'
import { IncidentLayer } from '../IncidentLayer'
import {
  countIncidentsPerFilter,
  getFilteredIncidents,
  addIconsToIncidents,
  getListOfIcons,
} from '../utils'

export const IncidentMap = () => {
  const [bbox, setBbox] = useState<Bbox | undefined>()
  const [map, setMap] = useState<MapType>()
  const [mapMessage, setMapMessage] = useState<JSX.Element | string>('')
  const [coordinates, setCoordinates] = useState<LatLngLiteral>()
  const [address, setAddress] = useState<string>()
  const [popup, setPopup] = useState<L.Popup>()

  const [showMessage, setShowMessage] = useState<boolean>(false)

  const [drawerState, setDrawerState] = useState<DrawerState>(DrawerState.Open)
  const [selectedIncident, setSelectedIncident] = useState<Incident>()
  const selectedMarkerRef = useRef<L.Marker<Properties>>()

  const [incidents, setIncidents] = useState<Incident[]>()
  const [filters, setFilters] = useState<Filter[]>([])
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>()

  const listedIcons = useMemo(() => getListOfIcons(filters), [filters])

  const { deviceMode, isMobile } = useDeviceMode()

  map?.attributionControl.setPrefix(false)

  const closeDrawerOverlay = useCallback(() => {
    setDrawerState(DrawerState.Closed)
  }, [])

  const setNotification = useCallback(
    (message: JSX.Element | string) => {
      setMapMessage(message)
      setShowMessage(true)
    },
    [setMapMessage, setShowMessage]
  )

  const handleCoordinateChange = useCallback(
    async (newCoordinates?: LatLngLiteral) => {

      if (!map || !newCoordinates) {
        return
      }

      // Remove existing popup if any
      if (popup) {
        popup.remove()
        setPopup(undefined)
      }

      // First check if coordinates are valid before setting any markers
      const response = await reverseGeocoderService(newCoordinates)

      if (response?.data?.coordinateIsValid == false) {
        const gemeente = configuration.map?.municipality || ''
        const message = `Deze app werkt alleen binnen de gemeente ${gemeente}.`

        const newPopup = L.popup()
          .setLatLng(newCoordinates)
          .setContent(message)
          .openOn(map)

        setPopup(newPopup)
        setCoordinates(undefined) // Ensure no coordinates are set
        return
      }

      if (response?.data?.coordinateIsValid == true) {
        // Only set coordinates if they are valid
        setCoordinates(newCoordinates)
      }
    },
    [map, popup]
  )

  const handleIncidentSelect = useCallback(
    (incident: Incident) => {
      const sanitizedCoords = featureToCoordinates(incident.geometry)
      if (
        map &&
        isMobile(deviceMode) &&
        sanitizedCoords.lat < map.getCenter().lat
      ) {
        const coords = {
          lat: sanitizedCoords.lat - 0.0003,
          lng: sanitizedCoords.lng,
        }
        const zoom = getFlyToZoom(map)
        map.flyTo(coords, zoom)
      }

      setSelectedIncident(incident)
      setDrawerState(DrawerState.Open)
    },
    [map, isMobile, deviceMode]
  )

  const resetSelectedMarker = useCallback(() => {
    if (selectedMarkerRef?.current) {
      selectedMarkerRef.current.setIcon(
        dynamicIcon(selectedMarkerRef.current.feature?.properties.icon)
      )
    }
    selectedMarkerRef.current = undefined
    setSelectedIncident(undefined)
  }, [])

  useEffect(() => {
    const handleMapClick = async (e: L.LeafletMouseEvent) => {
      // First reset any selected marker
      resetSelectedMarker()

      // Then handle the new coordinates
      handleCoordinateChange(e.latlng)
    }

    if (map) {
      map.on('click', handleMapClick)

      // Cleanup
      return () => {
        map.off('click', handleMapClick)
      }
    }
  }, [map, resetSelectedMarker, handleCoordinateChange])

  const { incidents: data, error, getIncidents } = usePaginatedIncidents()

  const throttledGetIncidents = useCallback(
    throttle((arg) => getIncidents(arg), 500, {
      trailing: false,
    }),
    []
  )

  useEffect(() => {
    if (bbox) {
      throttledGetIncidents(bbox)
    }
  }, [bbox, throttledGetIncidents])

  useEffect(() => {
    const incidentsWithIcons = addIconsToIncidents(filters, data, listedIcons)
    setIncidents(incidentsWithIcons)
  }, [data, filters, listedIcons])

  useEffect(() => {
    if (!incidents || incidents.length === 0) return

    const filteredIncidents = getFilteredIncidents(filters, incidents)
    setFilteredIncidents(filteredIncidents)

    const filterFromIncidents = countIncidentsPerFilter(filters, incidents)
    if (!isEqual(filterFromIncidents, filters)) {
      setFilters(filterFromIncidents)
    }
  }, [bbox, filters, incidents])

  useEffect(() => {
    if (error) {
      setNotification('Er konden geen meldingen worden opgehaald.')
    }
  }, [error, setNotification])

  useEffect(() => {
    if (coordinates) {
      reverseGeocoderService(coordinates).then((response) => {
        const address = response?.data?.address
          ? formatAddress(response?.data?.address)
          : undefined
        setAddress(address)
      })
    } else {
      setAddress(undefined)
    }
  }, [coordinates])

  const zoomLevel = map?.getZoom() || configuration.map.optionsIncidentMap.zoom

  return (
    <Wrapper>
      <StyledMap
        data-testid="incident-map"
        hasZoomControls
        setInstance={setMap}
        mapOptions={{
          ...MAP_OPTIONS,
          dragging: true,
          scrollWheelZoom: true,
          zoom: configuration.map.optionsIncidentMap.zoom,
        }}
      >
        {isMobile(deviceMode) && (
          <AddressSearchMobile
            address={address}
            setCoordinates={handleCoordinateChange}
            onFocus={() => setDrawerState(DrawerState.Closed)}
          />
        )}

        <IncidentLayer
          selectedIncident={selectedIncident}
          handleIncidentSelect={handleIncidentSelect}
          passBbox={setBbox}
          incidents={filteredIncidents}
          resetSelectedMarker={resetSelectedMarker}
          selectedMarkerRef={selectedMarkerRef}
          zoomLevel={zoomLevel}
        />

        {map && coordinates && (
          <Pin
            map={map}
            coordinates={coordinates}
            mode={deviceMode}
            closeOverlay={closeDrawerOverlay}
          />
        )}

        <DrawerOverlay
          onStateChange={setDrawerState}
          state={drawerState}
          onCloseDetailPanel={resetSelectedMarker}
          incident={selectedIncident}
          DetailPanel={DetailPanel}
        >
          <DrawerContentWrapper>
            <StyledParagraph>
              Op deze kaart staan meldingen in de openbare ruimte waarmee we aan
              het werk zijn. Vanwege privacy staat een klein deel van de
              meldingen niet op de kaart.
            </StyledParagraph>

            {!isMobile(deviceMode) && (
              <AddressLocation
                setCoordinates={handleCoordinateChange}
                address={address}
              />
            )}

            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              setMapMessage={setMapMessage}
            />
          </DrawerContentWrapper>
        </DrawerOverlay>

        <StyledViewerContainer
          $hasPanel={drawerState}
          topLeft={
            <TopLeftWrapper>
              {map && (
                <GPSLocation
                  setNotification={setNotification}
                  setCoordinates={handleCoordinateChange}
                />
              )}
              {showMessage && mapMessage && (
                <MapMessage
                  onClick={() => {
                    setShowMessage(false)
                  }}
                >
                  {mapMessage}
                </MapMessage>
              )}
            </TopLeftWrapper>
          }
        />
      </StyledMap>
    </Wrapper>
  )
}

export default IncidentMap
