import { StyledParagraph } from "./Paragrafo.style"

interface ParagrafoProps {
    texto: string 
}

export const Paragrafo = ({texto}: ParagrafoProps) => {
    return <StyledParagraph> {texto} </StyledParagraph>
}