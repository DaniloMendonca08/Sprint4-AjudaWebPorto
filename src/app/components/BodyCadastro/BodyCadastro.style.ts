import { colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledDivCadastro = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 7.5px;
    padding-bottom: 11px;

    @media (min-width: 320px) {
        height: 76.5vh;
        grid-gap: 0;
}
    @media (min-width: 768px) {
        height: 71vh;
        grid-gap: 5px;
}
`



export const StyledDivCep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledInputCadastro = styled.input`
    text-transform: capitalize;
    transition: all 0.3s;
    height: 22px;
    width: 100%;
    border-radius: 6px;
    background-color: ${colors.form.backgroundInput};
    border: 2px solid ${colors.form.borderInput};
`


export const StyledLabelCadastro = styled.label`
    font-size: 21px;
    font-weight: 500;
    color: ${colors.form.label};
    transition: all 0.3s;

    @media (min-width: 320px) {
        font-size: 18px;
        height: 50%;
    }
`

export const StyledButtonCadastro = styled.button`
    padding: 6px 2px;
    border-radius: 8px;
    border-color: ${colors.form.borderButton};
    background-color: ${colors.primary.blue};
    text-transform: uppercase;
    cursor: pointer;
`