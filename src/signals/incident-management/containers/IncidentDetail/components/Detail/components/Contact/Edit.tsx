// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import ErrorMessage from 'components/ErrorMessage'
import type { Incident } from 'types/incident'

import { StyledForm, StyledInput, EditFormWrapper } from './styled'
import { StyledButton, StyledH2 } from '../../../StatusForm/styled'

type Props = {
  onClose: () => void
  incident: Incident
  submit: (
    data: { email?: string; phone?: string },
    hasDirtyFields: boolean
  ) => void
}

const Edit = ({ onClose, incident, submit }: Props) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(
        'Enter a valid email address with an @ and domain name. For example: name@domain.com.'
      )
      .required(
        'Email address cannot be empty. Enter a valid email address with an @ and domain name. For example: name@domain.com.'
      ),
    phone: yup
      .string()
      .matches(
        /^(?:(\+|\(|\)|\s|-|[0-9]){3,20})?$/,
        'Enter a valid phone number. Only digits, spaces, parentheses, + and - are allowed.'
      ),
  })

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: incident.email,
      phone: incident.phone,
    },
    resolver: yupResolver(schema),
  })

  const { errors, dirtyFields } = formState
  return (
    <EditFormWrapper>
      <StyledH2 forwardedAs="h2">Edit contact details of the reporter</StyledH2>

      <StyledForm
        onSubmit={handleSubmit((data) => {
          submit(data, !!(dirtyFields.email || dirtyFields.phone))
        })}
      >
        <div>
          <StyledInput
            {...register('phone')}
            id={'phone'}
            placeholder="Phone reporter"
            defaultValue={incident.reporter.phone}
            showError={!!errors.phone}
          />
          {errors?.phone?.message && (
            <ErrorMessage
              data-testid="invalid-phone"
              message={errors.phone?.message}
            />
          )}
        </div>
        <div>
          <StyledInput
            {...register('email')}
            id={'email'}
            placeholder={'Email reporter'}
            defaultValue={incident.reporter.email}
            showError={!!errors.email}
          />
          {errors?.email?.message && (
            <ErrorMessage
              data-testid="invalid-email"
              message={errors.email?.message}
            />
          )}
        </div>

        <div>
          <StyledButton
            data-testid="contact-form-submit-button"
            type="submit"
            variant="secondary"
          >
            Save
          </StyledButton>

          <StyledButton
            data-testid="contact-form-cancel-button"
            variant="tertiary"
            onClick={onClose}
          >
            Cancel
          </StyledButton>
        </div>
      </StyledForm>
    </EditFormWrapper>
  )
}

export default Edit
