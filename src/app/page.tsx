"use client"

import SolucaoPorto from './SolucaoPorto/page'
import BodyPagPrincipal from './components/BodyPagPrincipal/BodyPagPrincipal'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

export default function Home() {
  return (
    <>
    <Header />
    <BodyPagPrincipal/>
    <Footer />
    </>
  )
}
