import styled from "styled-components";

export const StyledH1 = styled.h1`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 300;
    padding: 15px 0;
    text-align: center;

    @media (min-width: 320px) {
        font-size: 22px;
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 30px;
    }
`