// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2021 Gemeente Amsterdam
import type { FunctionComponent } from 'react'
import { useEffect, useMemo } from 'react'

import { themeColor, themeSpacing } from '@amsterdam/asc-ui'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import HistoryList from 'components/HistoryList'
import LoadingIndicator from 'components/LoadingIndicator'
import { showGlobalNotification } from 'containers/App/actions'
import { VARIANT_ERROR, TYPE_LOCAL } from 'containers/Notification/constants'
import { useFetch } from 'hooks'
import configuration from 'shared/services/configuration/configuration'
import type { History } from 'types/history'

const headerMapper: Record<string, string> = {
  ['Feedback from reporter received']: 'Feedback',
  ['Status edited to: Completed']: 'Explanation for Completed',
  ['Status edited to: Reopened']: 'Explanation for Reopened',
}

const Text = styled.p`
  margin-top: ${themeSpacing(2)};
  color: ${themeColor('tint', 'level5')};
`

interface ContactHistoryProps {
  id: number
}

const ContactHistory: FunctionComponent<ContactHistoryProps> = ({ id }) => {
  const storeDispatch = useDispatch()
  const { get, isLoading, data: history, error } = useFetch<History[]>()

  useEffect(() => {
    get(`${configuration.INCIDENT_PRIVATE_ENDPOINT}${id}/history`)
  }, [id, get])

  useEffect(() => {
    if (error) {
      storeDispatch(
        showGlobalNotification({
          title: 'The data could not be retrieved. Try again later.',
          variant: VARIANT_ERROR,
          type: TYPE_LOCAL,
        })
      )
    }
  }, [error, storeDispatch])

  const contactHistory = useMemo(
    () =>
      history?.filter(({ action }) => {
        return Object.keys(headerMapper).includes(action)
      }),
    [history]
  )

  if (error) return null

  if (isLoading) return <LoadingIndicator />

  if (!contactHistory || contactHistory.length === 0)
    return (
      <Text data-testid="no-contact-history">
        There has been no contact with this reporter
      </Text>
    )

  return <HistoryList list={contactHistory} />
}

export default ContactHistory
