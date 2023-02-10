import { TitleSectionWithLine } from '@/src/common'
import { SeeAllCategoryWithArrow } from '@/src/common/SeeAllCategoryWithArrow'
import { Box } from '@mui/material'
import React from 'react'

type Props = {}

export const BrowseCategory = (props: Props) => {
  return (
    <React.Fragment>
        <TitleSectionWithLine
          text='Browse the Category'
        />
        <SeeAllCategoryWithArrow text='See all Category'/>
    </React.Fragment>
  )
}