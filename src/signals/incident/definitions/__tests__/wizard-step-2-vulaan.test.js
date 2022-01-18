// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
import { Validators } from 'react-reactive-form'
import memoize from 'lodash/memoize'

import configuration from 'shared/services/configuration/configuration'

import step2 from '../wizard-step-2-vulaan'
import FormComponents from '../../components/form'

const { formFactory } = step2
const defaultControls = {
  error: expect.objectContaining({}),
  custom_text: expect.objectContaining({}),
  help_text: expect.objectContaining({
    meta: {
      ignoreVisibility: true,
      label: configuration.language.helpTextHeader,
      value: configuration.language.helpText,
    },
  }),
  $field_0: expect.objectContaining({}),
}

jest.mock('shared/services/configuration/configuration')
jest.mock('react-reactive-form')
jest.mock('lodash/memoize', () => ({
  __esModule: true,
  default: jest.fn((fn) => fn),
}))

describe('Wizard step 2 vulaan, formFactory', () => {
  afterEach(() => {
    configuration.__reset()
  })

  describe('Hard coded questions', () => {
    it('should only return location when category does not match', () => {
      configuration.featureFlags.showVulaanControls = true
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
      })
      const expected = {
        controls: {
          ...defaultControls,
          locatie: expect.any(Object),
        },
      }

      expect(actual).toEqual(expected)
    })

    it('should return empty controls when showVulaanControls is false', () => {
      configuration.featureFlags.showVulaanControls = false

      expect(formFactory({ category: 'afval' }).controls).toEqual({
        ...defaultControls,
        locatie: expect.any(Object),
      })
    })
  })

  describe('Fetch questions from backend', () => {
    beforeEach(() => {
      configuration.featureFlags.showVulaanControls = true
      configuration.featureFlags.fetchQuestionsFromBackend = true
    })

    it('should return empty controls without questions', () => {
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
      })
      const expected = {
        controls: defaultControls,
      }

      expect(actual).toEqual(expected)
    })

    it('should expand render prop to component', () => {
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
        questions: {
          key1: {
            render: 'TextInput',
          },
        },
      })
      const expected = {
        controls: {
          ...defaultControls,
          key1: {
            options: { validators: [] },
            render: FormComponents.TextInput,
          },
        },
      }

      expect(actual).toEqual(expected)
    })

    it('should expand validators', () => {
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
        questions: {
          key1: {
            options: {
              validators: ['required'],
            },
            render: 'TextInput',
          },
        },
      })
      const expected = {
        controls: {
          ...defaultControls,
          key1: {
            options: { validators: [Validators.required] },
            render: FormComponents.TextInput,
          },
        },
      }

      expect(actual).toEqual(expected)
    })

    it('should expand multiple validators', () => {
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
        questions: {
          key1: {
            options: {
              validators: ['required', 'email'],
            },
            render: 'TextInput',
          },
        },
      })
      const expected = {
        controls: {
          ...defaultControls,
          key1: {
            options: { validators: [Validators.required, Validators.email] },
            render: FormComponents.TextInput,
          },
        },
      }

      expect(actual).toEqual(expected)
    })

    it('should expand validators with arguments', () => {
      const maxLengthFn = () => null
      const maxLengthSpy = jest
        .spyOn(Validators, 'maxLength')
        .mockReturnValue(maxLengthFn)
      const actual = formFactory({
        category: 'category',
        subcategory: 'subcategory',
        questions: {
          key1: {
            options: {
              validators: [['maxLength', 16]],
            },
            render: 'TextInput',
          },
        },
      })
      const expected = {
        controls: {
          ...defaultControls,
          key1: {
            options: { validators: [maxLengthFn] },
            render: FormComponents.TextInput,
          },
        },
      }

      expect(maxLengthSpy).toHaveBeenCalledWith(16)
      expect(actual).toEqual(expected)
    })

    it('should memoize with cache key on category and subcategory', () => {
      formFactory({})
      expect(memoize).toHaveBeenCalled()

      const actual = memoize.mock.calls[0][1](
        'questions',
        'category',
        'subcategory'
      )
      const expected = 'categorysubcategory'
      expect(actual).toBe(expected)
    })
  })
})
