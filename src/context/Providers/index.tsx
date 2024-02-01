'use client'

import { type ReactNode } from 'react'
import { AppThemeProvider } from '~/context'

function Providers(props: { children: ReactNode }) {
  return <AppThemeProvider>{props.children}</AppThemeProvider>
}

export { Providers }
