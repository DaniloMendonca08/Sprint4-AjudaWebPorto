"use client"

import GlobalStyles from '@/styles/globalStyles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
      <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'"
          />
      </head>
      <GlobalStyles />
      <body>{children}</body>
    </html>
  )
}
