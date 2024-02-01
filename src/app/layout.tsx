import '~/styles/globals.css'

import localFont from 'next/font/local'
import { Providers } from '~/context'

export const metadata = {
  title: 'Competitive Shopping',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

const font = localFont({
  src: [
    {
      path: '../fonts/CVS-Health-Sans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/CVS-Health-Sans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/CVS-Health-Sans-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-cvs-health-sans',
  preload: true
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={font.className}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
