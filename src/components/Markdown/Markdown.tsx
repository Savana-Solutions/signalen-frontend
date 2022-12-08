// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2018 - 2022 Gemeente Amsterdam
import type { FC } from 'react'

import { Link as AscLink } from '@amsterdam/asc-ui'
import ReactMarkdown from 'react-markdown'
import type { ReactMarkdownOptions } from 'react-markdown'
import styled from 'styled-components'

import Paragraph from 'components/Paragraph'

const Link = styled(AscLink)`
  font-size: 1rem;
`

type Props = {
  hideTabindexLink?: boolean
} & ReactMarkdownOptions

const Markdown: FC<Props> = ({ children, hideTabindexLink, ...props }) => (
  <ReactMarkdown
    components={{
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      a: ({ node, ...props }) => (
        <Link
          tabIndex={hideTabindexLink ? -1 : 0}
          variant="inline"
          {...props}
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      p: ({ node, color, ...props }) => <Paragraph {...props} />,
    }}
    {...props}
  >
    {children}
  </ReactMarkdown>
)

export default Markdown
