"use client"

import SolucaoPorto from './SolucaoPorto/page'
import GlobalStyles from '@/styles/globalStyles'
import Layout from './layout'
import { BodyPagPrincipal } from './components/BodyPagPrincipal/BodyPagPrincipal'


export default function Home() {
  return (
    <>
    <Layout />
      <BodyPagPrincipal  />
    </>
  )
}
