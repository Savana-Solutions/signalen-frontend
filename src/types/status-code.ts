// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
export enum StatusCode {
  Reported = 'm',
  Awaiting = 'i',
  InProgress = 'b',
  Completed = 'o',
  Planned = 'ingepland',
  Cancelled = 'a',
  Split = 's',
  RequestToReopen = 'reopen requested',
  ReactionRequested = 'reaction requested',
  ReactionReceived = 'reaction received',
  Reopened = 'reopened',
  ToSend = 'ready to send',
  Sent = 'sent',
  SendFailed = 'send failed',
  ClosureRequested = 'closure requested',
  ForwardedToExtern = 'forward to external',
  DoneExternal = 'done external',
}
