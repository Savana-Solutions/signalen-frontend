// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2019 - 2021 Gemeente Amsterdam
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { doLogin } from 'containers/App/actions'
import configuration from 'shared/services/configuration/configuration'
import { withAppContext } from 'test/utils'

import LoginPage from '.'

jest.mock('shared/services/configuration/configuration')
jest.mock('shared/services/auth/auth')
const mockUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}))

describe('components/LoginPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
    ;(configuration as any).__reset()
  })

  it('should render login button', () => {
    render(withAppContext(<LoginPage />))

    expect(
      screen.getByText('To view this page, you need to be logged in.')
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('should login when Login button is clicked', async () => {
    render(withAppContext(<LoginPage />))

    const button = screen.getByRole('button', { name: 'Login' })
    userEvent.click(button)

    expect(mockUseDispatch).toHaveBeenCalledWith(doLogin())
  })
})
