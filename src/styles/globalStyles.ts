"use client"


import { Open_Sans } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const openSans = Open_Sans({ subsets: ['latin'] ,weight:'300'})

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
    height: 100%;
    width: 100%;
    font-family: ${openSans.style.fontFamily};
  }

img {
    max-width: 100%;
  }

`

export default GlobalStyles;