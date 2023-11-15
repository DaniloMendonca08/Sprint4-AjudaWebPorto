"use client"

import GlobalStyles from '@/styles/globalStyles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <GlobalStyles />
      <body>{children}</body>
    </html>
  )
}
