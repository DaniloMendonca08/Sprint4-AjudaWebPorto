"use client"

import SolucaoPorto from './SolucaoPorto/page'
import GlobalStyles from '@/styles/globalStyles'
import { Header } from './components/Header/Header'
import { BodyPagPrincipal } from './components/BodyPagPrincipal/BodyPagPrincipal'
import { Footer } from './components/Footer/Footer'


export default function Home() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <BodyPagPrincipal />
    <Footer />
    </>
  )
}
