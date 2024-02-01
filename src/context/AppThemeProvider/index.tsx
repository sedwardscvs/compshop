'use client'

import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

function AppThemeProvider(props: { children: ReactNode }) {
  return (
    <ThemeProvider
      storageKey="theme"
      attribute="class"
    >
      {props.children}
    </ThemeProvider>
  )
}

export { AppThemeProvider }
