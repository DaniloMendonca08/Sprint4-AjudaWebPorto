"use client"

import { BodySolucoes } from "../components/BodySolucoes/BodySolucoes";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import imgAjuda from "../../assets/ajuda.png"

export const paragrafoAjuda = "Nesta área, pensamos em ser uma parte mais abrangente para qualquer problema que o assegurado queira reportar, gerenciado por uma inteligência, ela aconselhará o assegurado e o guiará para fazer com que ele faça a melhor escolha. Por esta área ser mais abrangente, ela estará preparada para muitas possibilidades que o assegurado traga para resolver, fazendo com que seja aconselhado a melhor escolha entre todas as possiveis."

const Ajuda = () => {
    return ( <>
        <Header RemoverInput={true}/>
        <BodySolucoes titulo = {"Ajuda"} img = {imgAjuda} texto ={paragrafoAjuda} descricao="Imagem ilustrando uma ajuda"/>
        <Footer />
        </>)
   
}

export default Ajuda
