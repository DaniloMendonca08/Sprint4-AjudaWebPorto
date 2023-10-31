import { Titulo } from "../Titulo/Titulo"
import { StyledDivCentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledBodyCentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledTagACentralSolucoes } from "./BodyCentralSolucoes.style"


export const BodyCentralSolucoes = () => {
    return(
        <>
        <StyledBodyCentralSolucoes>
            <Titulo titulo="Central de Soluções"/>

            <StyledDivCentralSolucoes>
                <StyledTagACentralSolucoes href="">Acionar Sinistro</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Revisões Breves</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Ajuda</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Reportar Problema</StyledTagACentralSolucoes>
            </StyledDivCentralSolucoes>
        </StyledBodyCentralSolucoes>
        </>
    )
}