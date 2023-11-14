"use client"

import { Header } from "../components/Header/Header";
import { BodyCentralSolucoes } from "../components/BodyCentralSolucoes/BodyCentralSolucoes"
import { Footer } from "../components/Footer/Footer";

const CentralSolucoes = () => {
    return(
        <>
        <Header RemoverInput={true} />
        <BodyCentralSolucoes />
        <Footer />
        </>
    )
}

export default CentralSolucoes