import { Paragrafo } from "../Paragrafo/Paragrafo"
import { Titulo } from "../Titulo/Titulo"
import { StyledDivPagPrincipal, StyledIframePagPrincipal } from "./BodyPagPrincipal.style"

const paragrafo1 = "De acordo com as informações passadas pela equipe Porto, avaliamos uma carência na qualidade que é passada as informações pelo assegurado, sendo assim, tivemos a ideia de fazer um sistema que fácilitará com que o assegurado não tenha que passar muitas informações, com isso, será poupado um tempo do assegurado e garantido que as informações sejam adquiridas de forma correta, partindo deste ponto vamos implementar uma grande base de dados que fará com que todas as informações básicas do veiculo sejam recebidas antes que haja necessidade de apoio. Claramente, que não é possivel ter todas as informações, então, para que tenha todas as informações possiveis para que o chamado correto seja estabelecido, vamos fazer algumas perguntas que são muito dificeis de ser detectadas, por exemplo: peso adicional, quantidade de eixos, entre outros."

const paragrafo2 = "Já no Front-end, vamos implementar uma interface rica mais simplista para que o assegurado não se perca na hora de acionar a seguradora, vamos adicionar alguns botões que farão o auxilio do assegurado durante o chamado que será administrado por alguns métodos artificiais, que por sua vez, terão todas as informações necessárias para fazer a melhor escolha de ajuda para a determinada ocasião."

export const BodyPagPrincipal = () => {
    return(
        <>
             <StyledDivPagPrincipal> 
               <Titulo titulo="Solução Porto"/>

               <Paragrafo texto={paragrafo1} />

               <Paragrafo texto={paragrafo2} />

               <StyledIframePagPrincipal src="https://www.youtube.com/embed/F4O96O1h_RY?si=rk-7Hna38Dvpuy9N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></StyledIframePagPrincipal>
            </StyledDivPagPrincipal>
        </>
    )                                       
}