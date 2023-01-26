// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import type { RefObject } from 'react'

import { themeColor, themeSpacing } from '@amsterdam/asc-ui'
import styled, { css } from 'styled-components'

import Refresh from '../../../../../../images/icon-refresh.svg'

export const FilterBar = styled.div<{
  ref: RefObject<HTMLDivElement>
}>`
  width: 100%;
  position: relative;
`

export const SelectContainer = styled.div`
  display: flex;
  font-size: 1rem;
  height: ${themeSpacing(14)};
  margin: 0;
`

export const Select = styled.div<{
  selected?: boolean
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: ${themeSpacing(9)};

  &:first-of-type {
    margin-left: ${themeSpacing(12)};
  }

  ${({ selected }) =>
    selected &&
    css`
      text-decoration: underline;
    `}
`

export const InvisibleButton = styled.button<{ selected: boolean }>`
  background-color: unset;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${themeSpacing(3)};

  > * {
    transition: transform 0.25s;

    ${({ selected }) =>
      selected &&
      css`
        transform: rotate(180deg);
      `}
  }
`
export const RefreshIcon = styled(Refresh)`
  margin-right: ${themeSpacing(2)};
`

export const OptionListDropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: calc(100vh - ${themeSpacing(26.5)});
  top: ${themeSpacing(14)};
  overflow-y: auto;
  background-color: ${themeColor('tint', 'level2')};
`

export const OptionUl = styled.ul<{
  optionsOffsetLeft: number
  optionsTotal: number
}>`
  display: grid;
  position: absolute;
  width: ${themeSpacing(175)};
  line-height: 2rem;
  padding: 0;
  margin: 0;
  z-index: 1;

  ${({ optionsOffsetLeft, optionsTotal }) =>
    css`
      left: ${optionsOffsetLeft}px;
      grid-template-columns: repeat(${optionsTotal < 13 ? 1 : 2}, 1fr);
    `}
`

export const OptionLi = styled.li<{ selected: boolean }>`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
