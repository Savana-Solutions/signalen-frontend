// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import useFetchAll from 'hooks/useFetchAll'
import { withAppContext } from 'test/utils'

import { BarChart } from './BarChart'
import type { RawData } from './types'

const dispatch = jest.fn()
jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatch)

jest.mock('hooks/useFetchAll')

const mockData: RawData[] = [
  {
    total: 81,
    results: [],
  },
  {
    total: 131,
    results: [],
  },
  {
    total: 132,
    results: [],
  },
  {
    total: 78,
    results: [],
  },
  {
    total: 57,
    results: [],
  },
  {
    total: 559,
    results: [],
  },
  {
    total: 387,
    results: [],
  },
  {
    total: 0,
    results: [],
  },
  {
    total: 6513,
    results: [],
  },
  {
    total: 1948,
    results: [],
  },
  {
    total: 75,
    results: [],
  },
]

describe('BarChart', () => {
  it('should render correctly', () => {
    jest.mocked(useFetchAll as any).mockImplementation(() => ({
      data: mockData,
      isLoading: false,
      error: false,
      get: jest.fn(),
    }))

    render(
      withAppContext(
        <BarChart queryString="category_slug=rolcontainer-is-vol" />
      )
    )

    const title = screen.getByRole('heading', {
      name: 'Openstaande meldingen tot en met vandaag 9961',
    })

    expect(title).toBeInTheDocument()
  })

  it('should return loading indicator when loading', () => {
    jest.mocked(useFetchAll as any).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      error: false,
      get: jest.fn(),
    }))

    render(
      withAppContext(
        <BarChart queryString="category_slug=rolcontainer-is-vol" />
      )
    )

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
  })

  it('should show one error', () => {
    jest.mocked(useFetchAll as any).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      error: true,
      get: jest.fn(),
    }))

    render(
      withAppContext(
        <BarChart queryString="category_slug=rolcontainer-is-vol" />
      )
    )

    expect(dispatch).toBeCalledWith({
      payload: {
        title: 'De data kon niet worden opgehaald',
        type: 'local',
        variant: 'error',
      },
      type: 'sia/App/SHOW_GLOBAL_NOTIFICATION',
    })
  })
})
