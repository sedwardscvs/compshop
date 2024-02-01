'use client'

import { Header, HeaderThemeToggle } from 'component-library'
import { useTheme } from 'next-themes'

function AppHeader() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Header>
      <HeaderThemeToggle onClick={toggleTheme} />
    </Header>
  )
}

export { AppHeader }
