import { Imagem } from "../Imagem/Imagem"
import { Paragrafo } from "../Paragrafo/Paragrafo"
import { Titulo } from "../Titulo/Titulo"
import { StyledBodySolucoes } from "./BodySolucoes.style"
import { StyledDivBodySolucoes } from "./BodySolucoes.style"

interface BodySolucoesprops{
    titulo: string,
    img: string,
    texto: string,
    descricao?: string,
}

export const BodySolucoes = ({titulo, img, texto, descricao}: BodySolucoesprops) => {
    return(
        <>
        <StyledBodySolucoes>

            <StyledDivBodySolucoes>
                <Titulo  titulo={titulo} />

                <Imagem  img={img} descricao={descricao} />

                <Paragrafo texto={texto} />
            </StyledDivBodySolucoes>

        </StyledBodySolucoes>
        </>
    )
}