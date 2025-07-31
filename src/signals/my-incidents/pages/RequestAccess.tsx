// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2022 - 2024 Gemeente Amsterdam
import { useEffect, useState } from 'react'

import { BasePage } from './BasePage'
import { LoginForm } from '../components'

export const RequestAccess = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    ;(window as any).dataLayer?.push({
      event: 'interaction.component.virtualPageview',
      meta: {
        vpv_url: `/mijn-meldingen/login/`,
      },
    })
  }, [])

  return (
    <BasePage
      pageInfo={{
        documentTitle: 'Login',
        dataTestId: 'requestAccessMyIncidents',
        pageTitle: 'My reports',
      }}
      paragraphs={[
        `Log in with the email address you use to make reports. You will then receive a confirmation email to go to the reports overview.`,
      ]}
      errorMessage={errorMessage}
    >
      <LoginForm setErrorMessage={setErrorMessage} />
    </BasePage>
  )
}
