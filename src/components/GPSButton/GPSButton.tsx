// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@amsterdam/asc-ui'

import type { FunctionComponent } from 'react'
import type { LocationResult } from 'types/location'

import { pointWithinBounds } from 'shared/services/map-location'
import LoadingIndicator from 'components/LoadingIndicator'

import GPS from '../../images/icon-gps.svg'

const StyledButton = styled(Button)`
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
`

const GPSIcon = styled(GPS)`
  display: inline-block;
`

export interface GPSButtonProps {
  className?: string
  onLocationSuccess: (result: LocationResult) => void
  onLocationError: (error: GeolocationPositionError) => void
  onLocationOutOfBounds: () => void
}

const GPSButton: FunctionComponent<GPSButtonProps> = ({
  className,
  onLocationSuccess,
  onLocationError,
  onLocationOutOfBounds,
}) => {
  const [loading, setLoading] = useState(false)
  const [toggled, setToggled] = useState(false)

  const onSuccess: PositionCallback = useCallback(
    ({ coords }) => {
      const { accuracy, latitude, longitude } = coords

      if (pointWithinBounds([latitude, longitude])) {
        onLocationSuccess({
          accuracy,
          latitude,
          longitude,
          toggled: !toggled,
        })
        setToggled(!toggled)
      } else {
        onLocationOutOfBounds()
        setToggled(false)
      }

      setLoading(false)
    },
    [onLocationOutOfBounds, onLocationSuccess, toggled]
  )

  const onError: PositionErrorCallback = useCallback(
    (error) => {
      onLocationError(error)
      setToggled(false)
      setLoading(false)
    },
    [onLocationError]
  )

  const onClick = useCallback(
    (event) => {
      event.preventDefault()

      if (loading) return

      if (toggled) {
        onLocationSuccess({ toggled: false })
        setToggled(false)
        return
      }

      setLoading(true)

      global.navigator.geolocation.getCurrentPosition(onSuccess, onError)
    },
    [onLocationSuccess, toggled, loading, onError, onSuccess]
  )

  return (
    <StyledButton
      className={className}
      data-testid="gpsButton"
      icon={
        loading ? (
          <LoadingIndicator color="black" />
        ) : (
          <GPSIcon fill={toggled ? '#009de6' : 'black'} />
        )
      }
      aria-label="Huidige locatie"
      iconSize={20}
      onClick={onClick}
      size={44}
      variant="blank"
      type="button"
    />
  )
}

export default GPSButton
