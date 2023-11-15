"use client"

import { BodySolucoes } from "../components/BodySolucoes/BodySolucoes";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import imgReportarProblema from "../../assets/reportar.png"

const paragrafoReportarP = "Nesta área, pensamos em ser uma parte mais abrangente para qualquer problema que o assegurado queira reportar, gerenciado por uma inteligência, ela aconselhará o assegurado e o guiará para fazer com que ele faça a melhor escolha. Por esta área ser mais abrangente, ela estará preparada para muitas possibilidades que o assegurado traga para resolver, fazendo com que seja aconselhado a melhor escolha entre todas as possiveis."

const ReportarProblema = () => {
    return(
        <>
        <Header RemoverInput={true} />
        <BodySolucoes titulo = {"Reportar um problema"} img = {imgReportarProblema} texto = {paragrafoReportarP} descricao="Imagem demonstrando uma pessoa reportando um problema"/>
        <Footer />
        </>
    )
}

export default ReportarProblema