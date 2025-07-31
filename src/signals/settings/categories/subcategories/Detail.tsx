// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
/* istanbul ignore file */
import { CategoryDetail } from '../components'

export const DetailContainer = () => (
  <CategoryDetail
    isMainCategory={false}
    entityName="Subcategory"
    isPublicAccessibleLabel="Show notifications from this subcategory on public maps and on the map in the notification form."
  />
)

export default DetailContainer
