// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2022 Gemeente Amsterdam
import type { ReactPropTypes } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { PDOKAutoSuggestProps } from 'components/PDOKAutoSuggest'
import type { PdokResponse } from 'shared/services/map-location'

import type { Props } from './AddressLocation'
import { AddressLocation } from './AddressLocation'

const mockAddress = {
  postcode: '1000 AA',
  huisnummer: '100',
  woonplaats: 'Amsterdam',
  openbare_ruimte: 'West',
}

const mockList = (props: ReactPropTypes) => (
  <ul className="suggestList" {...props}>
    <li>Suggestion #1</li>
    <li>Suggestion #2</li>
  </ul>
)

const mockPDOKResponse: PdokResponse = {
  id: 'foo',
  value: 'Zork',
  data: {
    location: {
      lat: 12.282,
      lng: 3.141,
    },
    address: mockAddress,
    coordinateIsValid: true,
  },
}

jest.mock(
  'components/PDOKAutoSuggest/PDOKAutoSuggest',
  () =>
    ({
      className,
      onSelect,
      value,
      onClear,
      onFocus,
      onData,
    }: PDOKAutoSuggestProps) =>
      (
        <span data-testid="pdokAutoSuggest" className={className}>
          <button data-testid="autoSuggestClear" onClick={onClear}>
            Clear input
          </button>
          <button onClick={() => onSelect(mockPDOKResponse)}>selectItem</button>
          <button
            data-testid="getDataMockButton"
            type="button"
            onClick={() => {
              onData && onData(mockList)
            }}
          />
          <input data-testid="autoSuggestInput" type="text" onFocus={onFocus} />
          <span>{value}</span>
        </span>
      )
)

const defaultProps: Props = {
  setCoordinates: jest.fn(),
}

describe('AddresLocation', () => {
  it('tests whether the onAddressSelect actually sets the coordinates', async () => {
    render(<AddressLocation {...defaultProps} />)

    userEvent.click(screen.getByText('selectItem'))

    expect(defaultProps.setCoordinates).toHaveBeenCalledWith(
      mockPDOKResponse.data.location
    )
  })

  it('shows the address in the searchbar', () => {
    const props = {
      ...defaultProps,
      address: 'Warmoesstraat 178, 1012JK Amsterdam',
    }
    render(<AddressLocation {...props} />)

    const input = screen.getByText('Warmoesstraat 178, 1012JK Amsterdam')

    expect(input).toBeInTheDocument()
  })

  it('should reset the coordinates on reset button', () => {
    render(<AddressLocation {...defaultProps} />)

    const resetButton = screen.getByRole('button', { name: 'Clear input' })

    userEvent.click(resetButton)

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue('')
  })
})
