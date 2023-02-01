import { renderHook } from '@testing-library/react-hooks'
import * as reactRedux from 'react-redux'

import departmentsFixture from 'utils/__tests__/fixtures/departments.json'

import { useFilters } from './useFilter'

const departments = {
  ...departmentsFixture,
  count: departmentsFixture.count,
  list: departmentsFixture.results,
}
describe('useFilter', () => {
  beforeEach(() => {
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue(departments)
  })

  it('should select the first department by default and its associated categories', () => {
    const { result } = renderHook(useFilters)

    expect(result.current[0].name).toBe('department')
    expect(result.current[1].name).toBe('category')
    expect(result.current[1].options[0].value).toBe('Asbest / accu')
  })

  it('should return filter data, including categories based on the first department name', () => {
    const { result } = renderHook(useFilters, {
      initialProps: {
        value: 'AEG',
        display: 'Afval en Grondstoffen',
      },
    })

    expect(result.current[0].name).toBe('department')
    expect(result.current[1].name).toBe('category')
    expect(result.current[1].options[0].value).toBe('Bedrijfsafval')
  })
})
