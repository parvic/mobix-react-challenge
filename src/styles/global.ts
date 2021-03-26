import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  // normal-size screen: 1rem = 16px
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // small-size screen: 1rem = 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // smaler-size screen: 1rem = 14px
    }
  }

  body { 
    background-color: ${theme.colors.backgroundColor};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;
