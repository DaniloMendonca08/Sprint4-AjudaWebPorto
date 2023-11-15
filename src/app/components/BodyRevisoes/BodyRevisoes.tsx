import { Imagem } from "../Imagem/Imagem"
import { Titulo } from "../Titulo/Titulo"
import imgRevisoesBreves from "../../../assets/RevisoesBreves 4.png"
import { StyledDivBodyRevisoes } from "./BodyRevisoes.style"
import { Paragrafo } from "../Paragrafo/Paragrafo"

const paragrafoRevisoes = "A ideia com essas revisões breves é fazer com que o usuário ao inves de abrir diretamente um chamado, tenha uma série de perguntas técnicas e recomendações para fazer no veiculo para identificar um possivel problema, com isso, vamos fazer com que um simples serviço que pode ser feito por uma pessoa física seja realizado, ao inves de ser chamado um guincho desnecessariamente."

export const BodyRevisoes = () => {
    return(
        <>
            <StyledDivBodyRevisoes>
                <Titulo titulo= {"Revisões Breves"} />

                <Imagem  img={imgRevisoesBreves} descricao="Imagem de alguém fazendo revisão no carro" />

                <Paragrafo texto={paragrafoRevisoes} />
            </StyledDivBodyRevisoes>
        </>
    )
}