// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2023 Gemeente Amsterdam
import { useEffect } from 'react'
import type { Popup } from 'leaflet'

import { useSelectionProps } from './hooks/useSelectionProps'
import { StyledLabel, ListItem, StyledStatusDescription } from './styled'
import { IconListItem } from '../../../../../../../components/IconList'
import type {
  FeatureType,
  Item,
  FeatureStatusType,
  FeatureIcon
} from '../../types'
import type { SelectableFeature } from '../../types'

export type Props = {
  featureTypes: FeatureType[]
  featureStatusTypes: FeatureStatusType[]
  feature: SelectableFeature
  selection?: Item[]
}

type SelectionProps = {
  id: string | number
  item: SelectableFeature
  featureStatusType?: FeatureStatusType
  icon?: FeatureIcon
  onClick: () => Promise<void>
  popup?: Popup
} | null

export const AssetListItemSelectable = ({
  featureTypes,
  featureStatusTypes,
  feature,
  selection,
}: Props) => {
  const props: SelectionProps = useSelectionProps({
    featureTypes,
    featureStatusTypes,
    feature,
    selection,
  })

  // Clean up popup when component unmounts
  useEffect(() => {
    if (!props?.popup) return

    const currentPopup = props.popup
    return () => {
      currentPopup.remove()
    }
  }, [props?.popup])

  if (!props) return null

  const { id, item, featureStatusType, icon, onClick } = props

  return (
    <ListItem data-testid="asset-list-item-selectable">
      <IconListItem
        id={`${id}`}
        iconUrl={icon?.iconUrl}
        featureStatusType={featureStatusType}
        onClick={onClick}
        item={item}
        checked={false}
      >
        <StyledLabel>
          {item.label}
          {featureStatusType?.description && (
            <StyledStatusDescription status={featureStatusType.typeValue}>
              {featureStatusType?.description}
            </StyledStatusDescription>
          )}
        </StyledLabel>
      </IconListItem>
    </ListItem>
  )
}
