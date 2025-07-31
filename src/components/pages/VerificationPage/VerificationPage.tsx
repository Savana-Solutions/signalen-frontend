// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import type { ReactNode } from 'react'
import { useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'

import { StyledButton, StyledButtonDescription, StyledP } from './styled'
import { useFetch } from '../../../hooks'
import configuration from '../../../shared/services/configuration/configuration'
import LoadingIndicator from '../../LoadingIndicator'
import BasePage from '../BasePage'

export function VerificationPage() {
  const { post, error, isSuccess, isLoading } = useFetch()

  const params = useParams<{ token: string }>()

  useEffect(() => {
    post(`${configuration.EMAIL_VERIFICATION_ENDPOINT}`, {
      token: params.token,
    })
  }, [post, params.token])

  let button: ReactNode = null
  let paragraph = ''
  let documentTitle = ''
  if (isSuccess) {
    documentTitle = 'Email address confirmed'
    paragraph = `Your email address for the report has now been changed. You have received an email about this. If you have not received the email, please check your spam folder.`
  } else if (error) {
    button = (
      <>
        <StyledButtonDescription id={'verify-email-button'}>
          <strong>Do you wish to make another report?</strong>
        </StyledButtonDescription>
        <div>
          <StyledButton
            aria-describedby={'verify-email-button'}
            variant="primary"
            forwardedAs={Link}
            to="/incident/beschrijf"
          >
            Create another report
          </StyledButton>
        </div>
      </>
    )
    documentTitle = 'Invalid link'
    paragraph = `The link to change your email address has expired or is invalid. To receive a new verification link, please call 14 020, Monday to Friday from 9:00 to 17:00.`
  }

  return (
    <BasePage documentTitle={documentTitle} pageTitle={documentTitle}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <StyledP>{paragraph}</StyledP>
          {button}
        </>
      )}
    </BasePage>
  )
}
