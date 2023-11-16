"use client"

import SolucaoPorto from './SolucaoPorto/page'
import GlobalStyles from '@/styles/globalStyles'
import Layout from './layout'
import { BodyPagPrincipal } from './components/BodyPagPrincipal/BodyPagPrincipal'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'


export default function Home() {
  return (
    <>
    <Layout>
      <BodyPagPrincipal />
    </Layout>
    </>
  )
}
