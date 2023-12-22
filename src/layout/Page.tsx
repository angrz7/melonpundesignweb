import { Box } from '@mantine/core'
import React from 'react'

interface PageProps {
    children: React.ReactNode
    }

export const Page = ({ children }: PageProps) => {
  return (
    <Box px={'7rem'} pt={'5rem'}>
      {children}
    </Box>
  )
}
