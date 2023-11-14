"use client"

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { BodyAcionamento } from "../components/BodyAcionamento/BodyAcionamento";

const AcionamentoSinistro = () => {
    return(
        <>
        <Header RemoverInput={true}/>
        <BodyAcionamento />
        <Footer />
        </>
    )
}

export default AcionamentoSinistro