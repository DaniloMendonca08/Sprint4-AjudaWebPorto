"use client"

import { BodyCadastro } from "../components/BodyCadastro/BodyCadastro"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

const FazerCadastro = () => {
    return(
        <>
        <Header RemoverInput={true}/>
        <BodyCadastro />
        <Footer />
        </>
    )
}

export default FazerCadastro