"use client"

import GlobalStyles from '@/styles/globalStyles'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <GlobalStyles />
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  )
}