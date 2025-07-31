// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2024 Gemeente Amsterdam
import type { FunctionComponent } from 'react'

import { Alert } from '@amsterdam/asc-ui'

import BasePage from '../BasePage'

const MaintenancePage: FunctionComponent = () => (
  <BasePage
    documentTitle="Maintenance Page"
    pageTitle={'Public Space and Nuisance Reporting'}
  >
    <Alert
      level="error"
      heading="Temporarily unusable"
      content="We are improving this form. Therefore, you cannot use the form for a short time. Please try again later."
    />
  </BasePage>
)

export default MaintenancePage
