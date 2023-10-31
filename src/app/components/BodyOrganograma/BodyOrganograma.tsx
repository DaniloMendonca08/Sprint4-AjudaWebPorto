import imgOrganograma from "../../assets/Organograma.svg";
import { Imagem } from "../Imagem/Imagem";
import { Titulo } from "../Titulo/Titulo";
import { StyledDivOrganograma } from "./BodyOrganograma.style";

export const BodyOrganograma = () => {
    return(
        <>
            <StyledDivOrganograma>
                <Titulo titulo="Organograma"/>
                <Imagem img={imgOrganograma} descricao="Imagem de um organograma feito para o projeto" />
            </StyledDivOrganograma>
        </>
    )
}