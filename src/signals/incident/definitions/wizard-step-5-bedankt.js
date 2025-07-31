// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2022 Gemeente Amsterdam

import configuration from 'shared/services/configuration/configuration'

import FormComponents from '../components/form'
import IncidentNavigation from '../components/IncidentNavigation'

const navigation = configuration.featureFlags.appMode
  ? {
      app_close_window_action: {
        meta: {
          title: 'Do you wish to make another a report?',
          labelCloseButton: 'Close window',
          labelLinkButton: 'Create another report',
          hrefLinkButton: '/',
        },
        render: FormComponents.AppNavigation,
      },
    }
  : {
      next_incident_action: {
        meta: {
          label: 'Create another report',
          href: '/',
        },
        render: FormComponents.LinkButton,
      },
    }

export default {
  label: 'Thanks!',
  form: {
    controls: {
      confirmation_message: {
        meta: {
          type: 'message',
          value: `Your report is known to us under number: {incident.id_display}.
        \n Did you provide an email address? Then you will receive an email with all the details of your report.`,
          valueAuthenticated: `Your report is known to us under number: [{incident.id_display}](/manage/incident/{incident.id}).
        \n Did you provide an email address? Then you will receive an email with all the details of your report.`,
        },
        render: FormComponents.PlainText,
      },
      handling_message: {
        meta: {
          title: 'What do we do with your report?',
          key: 'incident.handling_message',
        },
        render: FormComponents.HandlingMessage,
      },

      ...navigation,

      $field_0: {
        isStatic: false,
        render: IncidentNavigation,
      },
    },
  },
}
