"use client"

import Image from 'next/image'
import Dropdown from './components/MenuNav/DropDown'
import { SolucaoPorto } from './SolucaoPorto/page'
import GlobalStyles from '@/styles/globalStyles'
import { CentralSolucoes } from './CentralSolucoes/page'
import { FazerCadastro } from './FazerCadastro/page'

export default function Home() {
  return (
    <>
    <GlobalStyles />
    <FazerCadastro />
    </>
  )
}
