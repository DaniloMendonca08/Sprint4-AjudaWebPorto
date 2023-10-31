import { StyledH1 } from "./Titulo.style"

interface TituloProps {
    titulo: string
}

export const Titulo = ({titulo}: TituloProps) => {
    return (
        <StyledH1>{titulo}</StyledH1>
    )
}