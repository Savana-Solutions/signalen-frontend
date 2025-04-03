import { render, screen, waitFor } from '@testing-library/react'
import * as reactRouterDom from 'react-router-dom'

import { VerificationPage } from './VerificationPage'
import * as API from '../../../../internals/testing/api'
import {
  fetchMock,
  mockRequestHandler,
} from '../../../../internals/testing/msw-server'
import { withAppContext } from '../../../test/utils'

fetchMock.disableMocks()
jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
}))

jest.mock('shared/services/configuration/configuration')

describe('VerificationPage', () => {
  beforeEach(() => {
    jest
      .spyOn(reactRouterDom, 'useParams')
      .mockImplementation(() => ({ token: '123' }))
  })
  it('should render the verification success page', async () => {
    render(withAppContext(<VerificationPage />))

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('E-mailadres bevestigd')).toBeInTheDocument()
      expect(
        screen.getByText(
          'Your email address for the report has now been changed. You have received an email about this. If you have not received the email, please check your spam folder.'
        )
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('link', { name: 'Doe een melding' })
      ).not.toBeInTheDocument()
    })
  })

  it('should render the verification failed page', async () => {
    mockRequestHandler({
      url: API.EMAIL_VERIFICATION_ENDPOINT,
      method: 'post',
      status: 400,
      body: 'wrong token',
    })

    render(withAppContext(<VerificationPage />))

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Link ongeldig')).toBeInTheDocument()
      expect(
        screen.getByText(
          'The link to change your email address has expired or is invalid. To receive a new verification link, please call 14 020, Monday to Friday from 9:00 to 17:00.'
        )
      ).toBeInTheDocument()

      expect(
        screen.getByRole('link', { name: 'Doe een melding' })
      ).toBeInTheDocument()
    })
  })
})
