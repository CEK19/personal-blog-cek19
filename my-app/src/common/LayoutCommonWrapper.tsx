import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'

type Props = {
    children: React.ReactNode
}

export const LayoutCommonWrapper = (props: Props) => {
  return (
    <React.Fragment>
        <Box>
            <Navbar/>
            {props.children}
        </Box>
    </React.Fragment>
  )
}