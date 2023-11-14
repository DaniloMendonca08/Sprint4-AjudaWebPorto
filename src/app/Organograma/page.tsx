"use client"

import { Header } from "../components/Header/Header";
import { BodyOrganograma } from "../components/BodyOrganograma/BodyOrganograma";
import { Footer } from "../components/Footer/Footer";

const Organograma = () => {
    return(
        <>
        <Header RemoverInput={true}/>
        <BodyOrganograma />
        <Footer />
        </>
    )
}

export default Organograma