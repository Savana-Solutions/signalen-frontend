// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2021 Gemeente Amsterdam
/**
 * Possible responses
 */
export const EXPIRED_STATUS = 410
export const EXPIRED_DETAIL = 'Expired!'

export const INCORRECT_STATUS_STATUS = 500
export const INCORRECT_STATUS_DETAIL = 'associated signal not in state'

export const SUBMITTED_PREVIOUSLY_STATUS = 410
export const SUBMITTED_PREVIOUSLY_DETAIL = 'Already used!'

/**
 * Notices
 */
export const INACCESSIBLE_TITLE = 'You can no longer respond to our questions'
export const INACCESSIBLE_CONTENT =
  'You have received an email about this or you will receive one shortly.'

export const SUBMITTED_PREVIOUSLY_TITLE =
  'You have already answered our questions before'
export const SUBMITTED_PREVIOUSLY_CONTENT =
  'We thank you once again for the additional information you have provided us.'

export const SUBMITTED_TITLE = 'Thank you'
export const SUBMITTED_CONTENT =
  'We will get to work with your report. Your information helps with this.'

export const GENERIC_ERROR_TITLE = 'Something went wrong'
export const GENERIC_ERROR_CONTENT = 'Please try again later.'
