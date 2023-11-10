"use client"

import Image from 'next/image'
import Dropdown from './components/MenuNav/DropDown'
import { SolucaoPorto } from './SolucaoPorto/page'
import GlobalStyles from '@/styles/globalStyles'

export default function Home() {
  return (
    <>
    <GlobalStyles />
    <SolucaoPorto />
    </>
  )
}
