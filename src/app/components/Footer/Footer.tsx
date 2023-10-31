import { StyledFooter } from "./Footer.style"
import { StyledParagraphFooter } from "./Footer.style"
import { StyledAFooter } from "./Footer.style"

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledParagraphFooter>
            FIAP - 1TDSPX <br />
            Nome: Danilo Araujo Mendonça / RM: 99752 <br />
            Nome: Guilherme Romero Nogueira / RM: 97696 <br />
            Nome: Matheus Andrade da Silva / RM: 98398 <br />
            Nome: Rodrigo Gonçalves Teixeira Filho / RM: 99838 <br />
            Nome: Arthur Lima Nascimento / RM: 551054 <br />
            </StyledParagraphFooter>
            <StyledAFooter href="https://github.com/DaniloMendonca08/AjudaWebPorto" target="_blank">Repositório GitHub</StyledAFooter>
        </StyledFooter>
    )
}