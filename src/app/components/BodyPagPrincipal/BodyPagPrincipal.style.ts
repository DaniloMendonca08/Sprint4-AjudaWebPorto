import styled from "styled-components";

export const StyledDivPagPrincipal = styled.div`
    display: grid;
    justify-items: center;
    padding: 0 20px;
`

export const StyledIframePagPrincipal = styled.iframe`
    height: 20vh;

@media (min-width: 320px) {
    width: 90vw;
    height: 16vh;
    margin-bottom: 2.5%;
}

@media (min-width: 375px) {
    margin-bottom: 4%;
    height: 22vh;
}

@media (min-width: 425px) {
    margin-bottom: 3%;
    height: 19vh;
}

@media (min-width: 768px) {
    height: 27.3vh;
}

@media (min-width: 1024px) {
    width: 70vw;
    height: 30vh;
}

@media (min-width: 1440px) {
    margin-bottom: 3.5%;
}

@media (min-width: 1920px) {
    height: 40.3vh;
}
`