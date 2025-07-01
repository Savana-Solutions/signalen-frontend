// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2023 Gemeente Amsterdam
import type { FC } from 'react'
import { useCallback } from 'react'

import type { AutoSuggestProps } from 'components/AutoSuggest'
import AutoSuggest from 'components/AutoSuggest'
import type { PdokResponse } from 'shared/services/map-location'

const numOptionsDeterminer = (data?: PdokResponse[]) => data?.length || 0

export interface PDOKAutoSuggestProps
  extends Omit<
    AutoSuggestProps,
    'url' | 'formatResponse' | 'numOptionsDeterminer'
  > {
  streetNameOnly?: boolean
  fieldList?: Array<string>
  municipality?: string
}

/**
 * Geocoder component that uses the Google geocoding service via forwardGeocoderService
 * Note: streetNameOnly, fieldList, and municipality props are kept for backward compatibility
 * but are not used with the Google API
 */
const PDOKAutoSuggest: FC<PDOKAutoSuggestProps> = ({
  streetNameOnly: _streetNameOnly = false, // Kept for backward compatibility
  ...rest
}) => {
  const onFormatResponse = useCallback((data: PdokResponse[]) => {
    return data || []
  }, [])

  return (
    <AutoSuggest
      {...rest}
      url="GOOGLE_GEOCODING_SERVICE" // Special marker to indicate custom service
      formatResponse={onFormatResponse}
      numOptionsDeterminer={numOptionsDeterminer}
      tabIndex={0}
    />
  )
}

export default PDOKAutoSuggest
