// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2021 Gemeente Amsterdam
import { StatusCode } from 'types/status-code'

import type { Status } from './types'

export const REPORTED = {
  key: StatusCode.Reported,
  value: 'Reported',
  color: 'red',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const AWAITING = {
  key: StatusCode.Awaiting,
  value: 'Awaiting handling',
  color: 'purple',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const IN_PROGRESS = {
  key: StatusCode.InProgress,
  value: 'In progress',
  color: 'blue',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const COMPLETED = {
  key: StatusCode.Completed,
  value: 'Completed',
  color: 'lightgreen',
  email_sent_when_set: true,
  shows_remaining_sla_days: false,
}

export const SPLIT = {
  key: StatusCode.Split,
  value: 'Split',
  color: 'lightgreen',
  email_sent_when_set: false,
  shows_remaining_sla_days: false,
}

export const PLANNED = {
  key: StatusCode.Planned,
  value: 'Planned',
  color: 'grey',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const CANCELLED = {
  key: StatusCode.Cancelled,
  value: 'Cancelled',
  color: 'darkgrey',
  email_sent_when_set: false,
  shows_remaining_sla_days: false,
}

export const REACTION_REQUESTED = {
  key: StatusCode.ReactionRequested,
  value: 'Reaction requested',
  email_sent_when_set: true,
  shows_remaining_sla_days: false,
}

export const REACTION_RECEIVED = {
  key: StatusCode.ReactionReceived,
  value: 'Reaction received',
  email_sent_when_set: false,
  shows_remaining_sla_days: false,
}

export const REQUEST_TO_REOPEN = {
  key: StatusCode.RequestToReopen,
  value: 'Request to reopen',
  color: 'orange',
  email_sent_when_set: false,
  shows_remaining_sla_days: false,
}

export const REOPENED = {
  key: StatusCode.Reopened,
  value: 'Reopened',
  color: 'orange',
  email_sent_when_set: true,
  shows_remaining_sla_days: true,
}

export const TO_SEND = {
  key: StatusCode.ToSend,
  value: 'External: to send',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const SENT = {
  key: StatusCode.Sent,
  value: 'External: sent',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const SEND_FAILED = {
  key: StatusCode.SendFailed,
  value: 'External: failed',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const CLOSURE_REQUESTED = {
  key: StatusCode.ClosureRequested,
  value: 'External: closure requested',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

export const FORWARDED_TO_EXTERN = {
  key: StatusCode.ForwardedToExtern,
  value: 'Forwarded to extern',
  email_sent_when_set: true,
  shows_remaining_sla_days: true,
}

export const DONE_EXTERNAL = {
  key: StatusCode.DoneExternal,
  value: 'External: completed',
  email_sent_when_set: false,
  shows_remaining_sla_days: true,
}

const statusList: Status[] = [
  REPORTED,
  AWAITING,
  IN_PROGRESS,
  REACTION_REQUESTED,
  REACTION_RECEIVED,
  COMPLETED,
  PLANNED,
  CANCELLED,
  SPLIT,
  REQUEST_TO_REOPEN,
  REOPENED,
  TO_SEND,
  SENT,
  SEND_FAILED,
  CLOSURE_REQUESTED,
  DONE_EXTERNAL,
  FORWARDED_TO_EXTERN,
]

export default statusList

export const changeStatusOptionList = [
  REPORTED,
  AWAITING,
  REACTION_REQUESTED,
  PLANNED,
  IN_PROGRESS,
  CLOSURE_REQUESTED,
  COMPLETED,
  REOPENED,
  CANCELLED,
]

export const isStatusEnd = (status: StatusCode): boolean =>
  [StatusCode.Completed, StatusCode.Cancelled, StatusCode.Split].includes(
    status
  )

export const isStatusClosed = (status: StatusCode): boolean =>
  [StatusCode.Completed, StatusCode.Cancelled].includes(status)

export const defaultTextsOptionList = [...changeStatusOptionList]
