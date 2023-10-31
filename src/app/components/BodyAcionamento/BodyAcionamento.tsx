import { Imagem } from "../Imagem/Imagem"
import { Paragrafo } from "../Paragrafo/Paragrafo"
import { Titulo } from "../Titulo/Titulo"
import { StyledBodyAcionamento } from "./BodyAcionamento.style"
import { StyledDivBodyAcionamento } from "./BodyAcionamento.style"
import imgAcionamentoSinistro from "../../assets/imgAcionamentoSinistro.svg"

export const paragrafoAcionamento = "Nesta parte, introduziremos algumas perguntas que são muito difíceis de serem indentificadas, seram poucas perguntas e bem objetivas, até porque neste momento o assegurado não gostaria de ter que responder uma série muito grande de questionamentos, mas, por trás destas simples perguntas, estará sendo trabalhado uma grande base de dados que fará com que a melhor escolha seja feita."

export const BodyAcionamento = () => {
return(
        <>
        <StyledBodyAcionamento>

            <StyledDivBodyAcionamento>
            <Titulo titulo="Acionamento de Sinistro" />
            <Imagem img={imgAcionamentoSinistro} descricao= "Imagem de uma pessoa ligando para algúem/algum lugar"/>
            <Paragrafo texto={paragrafoAcionamento}/>
            </StyledDivBodyAcionamento>

        </StyledBodyAcionamento>
        </>
    )
}