// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2021 Gemeente Amsterdam
import type { Priority } from './types'

const priorityList: Priority[] = [
  {
    key: 'high',
    value: 'High',
    info: 'pick up report with haste',
    icon: 'PriorityHigh',
  },
  { key: 'normal', value: 'Normal' },
  {
    key: 'low',
    value: 'Low',
    info: 'internal report without service promise',
  },
]

export default priorityList
