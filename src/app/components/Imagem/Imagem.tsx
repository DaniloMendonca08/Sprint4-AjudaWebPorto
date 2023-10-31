import { StyledImg } from "./Imagem.style"

interface ImagemProps {
    img: string,
    descricao?: string,
}

export const Imagem = ({img, descricao}: ImagemProps) => {
    return (
        <StyledImg src={img} alt={descricao}></StyledImg>
    )
}