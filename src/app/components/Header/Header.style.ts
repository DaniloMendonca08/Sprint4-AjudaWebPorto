import styled from "styled-components"
import Lupa from "../../../assets/LupaDePesquisa.svg"

export const StyledHeader = styled.header`
    background-color: #E2E2FF;
    width: 100%;
    padding-top: 3vh;

@media (min-width: 320px) {
    height: 6vh;
    padding-top: 1.5vh;
}

@media (min-width: 768px) {
    height: 10vh;
    padding-top: 3vh;
}


@media (min-width: 1024px) {
    height: 10vh;
}    
`

export const StyledDivHeader = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin-left: 32px;   

    @media (min-width: 320px) {
        margin-left: 10px;
        margin-top: 0;
    }

    @media (min-width: 768px) {
        margin-left: 14px;
    }

    @media (min-width: 1024px) {
        margin-left: 17px;
    }

` 

export const StyledInputHeader = styled.input`
    width: 700px;
    height: 40px;
    border-radius: 150px;
    background-image: url(${Lupa});
    background-position: 2%;
    background-repeat: no-repeat;
    border: 1px solid white;
    text-align: center;
    margin-right: 205px;
    
${(props) =>
props.RemoverInput &&`
    display: none;
`
}

@media (min-width: 320px) {
    display: none;
}

@media (min-width: 768px) {
    display: block;
    width: 350px;
    height: 40px;
    margin-right: 70px;
}

@media (min-width: 1024px) {
    font-size: 18px;
    width: 450px;
    margin-left: 40px;
}
`

export const StyledImgPorto = styled.img`
    width: 100px;
    margin-left: 3vw;

@media (min-width: 320px) {
    width: 90px;
    margin-left: 0;
}

@media (min-width: 768px) {
    width: 130px;
}

@media (min-width: 1024px) {
    width: 150px;
}
`