// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2021 Gemeente Amsterdam
import type { Priority } from './types'

const priorityList: Priority[] = [
  {
    key: 'high',
    value: 'High',
    info: 'melding met spoed oppakken',
    icon: 'PriorityHigh',
  },
  { key: 'normal', value: 'Normal' },
  {
    key: 'low',
    value: 'Low',
    info: 'interne melding zonder servicebelofte',
  },
]

export default priorityList
