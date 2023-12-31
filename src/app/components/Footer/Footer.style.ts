import { colors } from "@/styles/colors"
import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: ${colors.primary.dark};
    width: 100%;
    height: 18vh;
    padding-bottom: 26px;

@media (min-width: 320px) {
    height: 150px;
}

@media (min-width: 768px) {
    height: 19vh;
}

@media (min-width: 1024px) {
    height: 22vh;
}
@media (min-width: 1440px) {
    height: 20.5vh;
}

@media (min-width: 1920px) {
    height: 24.4vh;
}
`
export const StyledParagraphFooter = styled.p`
    color: ${colors.primary.light};
    font-size: 13px;
    font-weight: 300;
    padding: 10px 40px;
    padding-bottom: 15px;
    width: 100%;
@media (min-width: 320px) {
    padding: 7px;
    font-size: 12px;
}
 
@media (min-width: 768px) {
    font-size: 13px;
}

@media (min-width: 1024px) {
    padding: 10px;
    font-size: 16px;
}

@media (min-width: 1440px) {
    font-size: 17px;
}
`

export const StyledAFooter = styled.a`
    text-decoration: none;
    padding: 0 40px;
    margin-left: 2vw;
    border-radius: 10px;
    background-color: ${colors.primary.dark};
    color: ${colors.primary.light};
    border: 2px solid ${colors.primary.light};

&:hover {
    background-color: ${colors.primary.light};
    color: ${colors.primary.dark};
    border: 2px solid ${colors.primary.dark};
}

@media (min-width: 320px) {
    padding: 0 10px;
    font-size: 14px;
    
}

@media (min-width: 1024px) {
    padding: 2px 20px;
    font-size: 20px;
}

@media (min-width: 1440px) {
    padding: 2px 10px;
    margin-top: 20px;
}
`