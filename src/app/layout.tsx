"use client"

import GlobalStyles from '@/styles/globalStyles'

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <GlobalStyles />
      <body>{children}</body>
    </html>
  )
}