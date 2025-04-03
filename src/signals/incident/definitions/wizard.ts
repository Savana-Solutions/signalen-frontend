// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2021 Gemeente Amsterdam
import type { Incident } from 'types/incident'

import beschrijf from './wizard-step-1-beschrijf'
import vulaan from './wizard-step-2-vulaan'
import contact from './wizard-step-3-contact'
import summary from './wizard-step-4-summary'
import bedankt from './wizard-step-5-bedankt'
import fout from './wizard-step-6-fout'
import type { SectionLabels } from '../components/IncidentPreview/IncidentPreview'

export type Sections =
  | 'beschrijf'
  | 'vulaan'
  | 'contact'
  | 'summary'
  | 'opslaan'
  | 'bedankt'
  | 'fout'

export type FormAction = 'UPDATE_INCIDENT' | 'CREATE_INCIDENT'

export type WizardSection = {
  [key in Sections]: WizardSectionProp
}

export type WizardSectionProp = {
  stepLabel?: string
  countAsStep?: boolean
  form?: any
  formFactory?: any
  label?: string
  subHeader?: string
  previewFactory?: (incident: Incident) => any
  sectionLabels?: SectionLabels
  previousButtonLabel?: string
  previousButtonClass?: string
  nextButtonLabel?: string
  formAction?: FormAction
}

export default {
  beschrijf: {
    stepLabel: 'Describe your report',
    countAsStep: true,
    ...beschrijf,
  },
  vulaan: {
    stepLabel: 'Location and questions',
    countAsStep: true,
    ...vulaan,
  },
  contact: {
    stepLabel: 'Contact details',
    countAsStep: true,
    ...contact,
  },
  summary: {
    stepLabel: 'Send',
    countAsStep: true,
    ...summary,
  },
  opslaan: {},
  bedankt,
  fout,
} as WizardSection
