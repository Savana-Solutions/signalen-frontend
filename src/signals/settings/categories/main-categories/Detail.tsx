// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
/* istanbul ignore file */
import { CategoryDetail } from '../components'

export const DetailContainer = () => (
  <CategoryDetail
    isMainCategory={true}
    entityName="Main category"
    isPublicAccessibleLabel="Show reports from this main category on public maps and on the map in the report form."
  />
)

export default DetailContainer
