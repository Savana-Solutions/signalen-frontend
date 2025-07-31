// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import type { ReactNode } from 'react'
import { useCallback } from 'react'

import { Button, Checkbox, Label } from '@amsterdam/asc-ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'

import { ButtonsWrapper, EditAttachmentWrapper, StyledForm } from './styled'
import TextArea from '../../../../../../components/TextArea'
import type { Attachment } from '../../types'
import { StyledH2 } from '../StatusForm/styled'

type Props = {
  attachment: Attachment
  children: ReactNode
  showEditAttachment: boolean
  setSelectedEditAttachment: (location: string | null) => void
  patch: (href: string, attachment: FormValues) => void
}

type FormValues = {
  public: boolean
  caption?: string
}

export default function EditAttachment({
  attachment,
  children,
  patch,
  showEditAttachment,
  setSelectedEditAttachment,
}: Props) {
  const schema = yup.object().shape({
    public: yup.boolean(),
    caption: yup
      .string()
      .nullable()
      .max(120, 'You have entered more than the maximum of 120 characters.'),
  })

  const { handleSubmit, formState, control, getValues } = useForm<FormValues>({
    defaultValues: {
      public: attachment.public,
      caption: attachment.caption ?? undefined,
    },
    resolver: yupResolver(schema),
  })

  const { errors, dirtyFields } = formState

  const onSubmit = useCallback(
    (data) => {
      const dirtyKeys = Object.keys(dirtyFields)
      let patchData = dirtyKeys.reduce((acc, key) => {
        if (data[key] !== undefined) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          acc[key] = data[key]
        }
        return acc
      }, {} as FormValues)

      if (patchData.caption === '') {
        patchData = { ...patchData, caption: null } as FormValues & {
          caption: null
        }
      }

      patch(attachment._links.self.href, patchData)
      setSelectedEditAttachment(null)
    },
    [attachment._links.self.href, dirtyFields, patch, setSelectedEditAttachment]
  )

  return showEditAttachment ? (
    <EditAttachmentWrapper>
      <StyledH2 forwardedAs="h2">Edit file</StyledH2>
      {children}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="public"
          control={control}
          render={({ field }) => {
            return (
              <Label label={'Show publically'}>
                <Checkbox {...field} checked={field.value} />
              </Label>
            )
          }}
        />
        {getValues('public') && (
          <Controller
            name="caption"
            control={control}
            render={({ field }) => {
              return (
                <TextArea
                  {...field}
                  errorMessage={errors.caption?.message}
                  label={
                    <>
                      <strong>Undertone</strong> (optional)
                    </>
                  }
                  maxContentLength={120}
                />
              )
            }}
          />
        )}
        <ButtonsWrapper>
          <Button
            data-testid="edit-attachment-submit-button"
            type="submit"
            variant="secondary"
          >
            Save
          </Button>

          <Button
            data-testid="edit-attachment-cancel-button"
            variant="tertiary"
            onClick={() => setSelectedEditAttachment(null)}
          >
            Cancel
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    </EditAttachmentWrapper>
  ) : (
    <>{children}</>
  )
}
