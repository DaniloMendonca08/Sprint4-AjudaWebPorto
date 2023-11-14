"use client"

import styled, { css } from "styled-components"
import Lupa from "../../../assets/lupa.png"
import { colors } from "@/styles/colors";

export const StyledHeader = styled.header`
    background-color: ${colors.primary.purple};
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
    margin-right: 10px;

    @media (min-width: 320px) {
        margin-left: 10px;
    }

    @media (min-width: 768px) {
        margin-left: 14px;
    }

    @media (min-width: 1024px) {
        margin-left: 17px;
    }

` 

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    RemoverInput?: boolean;
  }

  export const StyledInputHeader = styled.input<StyledInputProps>`
  width: 700px;
  height: 40px;
  border-radius: 150px;
  background-image: url(${Lupa.src});
  background-position: 2%;
  background-repeat: no-repeat;
  border: 1px solid ${colors.primary.light};
  text-align: center;
  margin-right: 205px;

  ${(props) =>
    props.RemoverInput &&
    css`
        display: none;
    `}

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 350px;
    height: 40px;
    margin-right: 70px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    width: 450px;
    margin-left: 40px;
  }
`;

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