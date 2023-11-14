import { Titulo } from "../Titulo/Titulo"
import { StyledDivCentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledTagACentralSolucoes } from "./BodyCentralSolucoes.style"


export const BodyCentralSolucoes = () => {
    return(
        <>
            <Titulo titulo="Central de Soluções"/>

            <StyledDivCentralSolucoes>
                <StyledTagACentralSolucoes href="/AcionamentoSinistro">Acionar Sinistro</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="/RevisoesBreves">Revisões Breves</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="/Ajuda">Ajuda</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="/ReportarProblema">Reportar Problema</StyledTagACentralSolucoes>
            </StyledDivCentralSolucoes>
        </>
    )
}