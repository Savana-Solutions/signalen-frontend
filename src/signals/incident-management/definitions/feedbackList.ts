// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2019 - 2021 Gemeente Amsterdam
enum FeedbackKey {
  SATISFIED = 'satisfied',
  NOT_SATISFIED = 'not_satisfied',
  NOT_RECEIVED = 'not_received',
}

export type Feedback = {
  key: FeedbackKey
  value: string
}

const feedbackList: Array<Feedback> = [
  {
    key: FeedbackKey.SATISFIED,
    value: 'Satisfied',
  },
  {
    key: FeedbackKey.NOT_SATISFIED,
    value: 'Not satisfied',
  },
  {
    key: FeedbackKey.NOT_RECEIVED,
    value: 'Not received',
  },
]

export default feedbackList
