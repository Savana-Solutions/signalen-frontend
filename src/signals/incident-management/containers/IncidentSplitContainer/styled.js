// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2023 Gemeente Amsterdam
import {
  Heading,
  Label,
  RadioGroup,
  breakpoint,
  themeColor,
  themeSpacing,
} from '@amsterdam/asc-ui'
import { Button } from '@amsterdam/asc-ui'
import styled from 'styled-components'

import AddNote from 'components/AddNote'
import InfoText from 'components/InfoText'

export const ThinLabel = styled.span`
  font-weight: 400;
`

export const StyledDefinitionList = styled.dl`
  margin: 0;
  display: grid;
  grid-row-gap: 0;
  padding-bottom: ${themeSpacing(4)};

  @media ${breakpoint('min-width', 'tabletM')} {
    grid-template-columns: 3fr 3fr;
  }

  @media ${breakpoint('min-width', 'laptop')} {
    grid-template-columns: 3fr 2fr;
  }

  dt,
  dd {
    @media ${breakpoint('min-width', 'tabletM')} {
      padding: ${themeSpacing(2)} 0;
    }
  }

  dt {
    color: ${themeColor('tint', 'level5')};
    margin: 0;
    font-weight: 400;
  }

  dd {
    padding-bottom: ${themeSpacing(2)};
    font-weight: 600;
    width: 100%;
  }
`

export const StyledSubmitButton = styled(Button)`
  margin-right: ${themeSpacing(5)};
`

export const StyledRadioGroup = styled(RadioGroup)`
  display: inline-flex;
`

export const StyledRadioLabel = styled(Label)`
  align-self: baseline;

  * {
    font-weight: normal;
  }
`

export const StyledLabel = styled(Label)`
  > span {
    margin-top: 0;
  }
`

export const StyledMainContainer = styled.div`
  display: grid;
  grid-column: span 1;
  row-gap: ${themeSpacing(8)};
  padding-bottom: ${themeSpacing(8)};
`

export const StyledButtonContainer = styled.div`
  grid-column: span 1;
`

export const StyledFieldset = styled.fieldset`
  background-color: ${themeColor('tint', 'level2')};
  scroll-margin-top: ${themeSpacing(15)};
  padding: ${themeSpacing(5)};
  margin-inline: -${themeSpacing(5)};
  display: grid;
  row-gap: ${themeSpacing(8)};
  margin-bottom: ${themeSpacing(8)};

  @media ${breakpoint('min-width', 'tabletM')} {
    column-gap: ${({ theme }) => theme.layouts.large.gutter}px;
    grid-column: span 2;
    grid-template-columns: 7fr 5fr;
  }
`

export const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`

export const StyledWrapper = styled.div`
  padding-top: ${themeSpacing(6)};
  padding-bottom: ${themeSpacing(6)};
`

export const StyledAddNote = styled(AddNote)`
  grid-row-start: 3;
`

export const StyledSelect = styled.div`
  max-width: 420px;

  strong {
    font-size: 1rem;
  }
`

export const StyledInfoText = styled(InfoText)`
  margin: ${themeSpacing(2, 0, 0)};
`

export const StyledForm = styled.form`
  display: grid;
  padding-top: ${themeSpacing(8)};
  width: 100%;

  @media ${breakpoint('min-width', 'tabletM')} {
    column-gap: ${({ theme }) => theme.layouts.large.gutter}px;
    grid-template-columns: 7fr 5fr;
  }
`

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoint('min-width', 'tabletM')} {
    grid-column: span 2;
  }
`

export const StyledExtraIncidentButtonContainer = styled.div`
  border-bottom: 2px solid ${themeColor('tint', 'level3')};
  padding-bottom: ${themeSpacing(8)};
  margin-bottom: ${themeSpacing(2)};

  @media ${breakpoint('min-width', 'tabletM')} {
    grid-column: span 2;
  }
`

export const RemoveButton = styled(Button)`
  justify-content: center;
  height: 44px;
  width: 44px;
`
