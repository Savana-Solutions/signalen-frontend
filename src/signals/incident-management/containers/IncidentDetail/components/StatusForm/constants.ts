// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2022 Municipality of Amsterdam
export const AFGEHANDELD_CONTENT = `
  Only use this status if the report has actually been handled,
  otherwise use the status Scheduled. Never refer to another department; recategorize the report instead.
`
export const CATEGORY_OVERIG_HEADING = 'This status change is not possible'
export const CATEGORY_OVERIG_CONTENT =
  'It is not possible to handle a report in the category Other - Other. Place the report in the most appropriate category.'

export const MELDING_CHECKBOX_DESCRIPTION = 'Send this message to the reporter'
export const DEELMELDING_EXPLANATION =
  'This explanation is for the colleague who handles the main report. The reporter will not receive this explanation.'
export const DEELMELDINGEN_STILL_OPEN_HEADING =
  'Attention, there are still sub-reports open!'
export const DEELMELDINGEN_STILL_OPEN_CONTENT = `If you handle the main report now, the outstanding sub-reports will be cancelled.
  The sub-report will then no longer be processed and you can no longer communicate with the reporter about the sub-report.
  Only handle the main report when all sub-reports have been resolved or when the sub-reports are no longer needed.`
export const NO_REPORTER_EMAIL = `The reporter has not provided an email address, no message will be sent.`
export const NO_CONTACT_ALLOWED = `No message will be sent.`
export const NO_EMAIL_IS_SENT = 'No message will be sent.'

export const DEFAULT_TEXT_MAX_LENGTH = 3000
export const DEFAULT_TEXT_LABEL = 'Message to reporter'

export const REPLY_MAIL_MAX_LENGTH = 1000
export const REPLY_MAIL_LABEL = 'Question to reporter'
export const REPLY_NO_MAIL_HEADING = `The reporter has not provided an email address`
export const REPLY_NO_MAIL_CONTENT = `So you cannot ask them a question. Is the phone number known? Then call the reporter.`
export const REPLY_CHANGE_STATUS_HEADING = `Attention, there is a question pending with the reporter!`
export const REPLY_CHANGE_STATUS_CONTENT = `If you change the status now, the reporter can no longer respond.`
export const REPLY_DEELMELDING_EXPLANATION =
  'This question is for the colleague who handles the main report. The reporter will not receive this explanation.'
