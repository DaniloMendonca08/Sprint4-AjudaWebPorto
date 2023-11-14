"use client"

import { Header } from "../components/Header/Header";
import { BodyRevisoes } from "../components/BodyRevisoes/BodyRevisoes";
import { Footer } from "../components/Footer/Footer";

const RevisoesBreves = () => {
    return(
        <>
        <Header RemoverInput={true} />
        <BodyRevisoes />
        <Footer />
        </>
    )
}

export default RevisoesBreves