// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2022 Gemeente Amsterdam
import configuration from 'shared/services/configuration/configuration'

import FormComponents from '../components/form'
import IncidentNavigation from '../components/IncidentNavigation'
import { validatePhoneNumber } from '../services/custom-validators/custom-validators'

export default {
  label: 'Contact details',
  nextButtonLabel: 'Next',
  nextButtonClass: 'action primary arrow-right',
  previousButtonLabel: 'Previous',
  previousButtonClass: 'action startagain',
  formAction: 'UPDATE_INCIDENT',
  form: {
    controls: {
      phone_email_text: {
        meta: {
          type: 'message',
          heading:
            'May we call you for questions? And keep you informed by email?',
          value: `We often have a question. That way we can solve the problem faster or better. Or we want to explain something. We would like to call you. Or else we will email you.
\n We only use your telephone number and email address for this message.`,
          wrappedComponent: FormComponents.PlainText,
        },
        render: FormComponents.WithHeading,
      },
      phone: {
        meta: {
          // https://bytes.grubhub.com/disabling-safari-autofill-for-a-single-line-address-input-b83137b5b1c7
          autoComplete: 'search_tel',
          autoRemove: /[^\d ()+-]/g,
          label: 'What is your phone number?',
          path: 'reporter.phone',
          subtitle: '',
          type: 'tel',
          width: '50%',
        },
        render: FormComponents.TextInput,
        options: {
          validators: [validatePhoneNumber, ['maxLength', 17]],
        },
      },
      email: {
        meta: {
          autoComplete: 'search_email',
          autoRemove: /[^\w!#$%&'*+./;=?@^`{|}~-]/g,
          label: 'What is your email address?',
          path: 'reporter.email',
          subtitle: '',
          type: 'email',
        },
        render: FormComponents.TextInput,
        options: {
          validators: ['email', ['maxLength', 100]],
        },
      },
      privacy_text: {
        meta: {
          type: 'message',
          heading: 'Can we forward your report?',
          value:
            'Sometimes the municipality can do nothing. Another organization has to do the work. If that is the case, we can sometimes forward your report. We will send your telephone number or e-mail address. But we will only do that if you agree.',
          wrappedComponent: FormComponents.PlainText,
        },
        render: FormComponents.WithHeading,
      },
      sharing_allowed: {
        meta: {
          shortLabel: 'Permission to share contact information',
          value: configuration.language?.consentToContactSharing,
          path: 'reporter.sharing_allowed',
        },
        render: FormComponents.EmphasisCheckboxInput,
      },
      $field_0: {
        isStatic: false,
        render: IncidentNavigation,
      },
      help_text: {
        meta: {
          label: configuration.language.helpTextHeader,
          value: configuration.language.helpText,
          ignoreVisibility: true,
        },
        render: FormComponents.PlainText,
      },
    },
  },
}
