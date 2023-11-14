import Image, { StaticImageData } from "next/image"
import { StyledImg } from "./Imagem.style"

interface ImagemProps {
    img: StaticImageData,
    descricao?: string,
}

export const Imagem = ({img, descricao}: ImagemProps) => {
    return (
        <Image src={img} alt={descricao} />
    )
}