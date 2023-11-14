"use client"

import GlobalStyles from '@/styles/globalStyles'
import { SolucaoPorto } from './SolucaoPorto/page'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { BodyPagPrincipal } from './components/BodyPagPrincipal/BodyPagPrincipal'


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
