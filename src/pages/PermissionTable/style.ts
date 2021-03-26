import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  padding: 3.5rem 3rem;

  h1 {
    font-size: ${theme.fontSize.pageTitle};
    line-height: ${theme.lineHeight.pageTitle};
  }


  button {
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${theme.colors.button};
    border-radius: 3rem;
    border: 0;

    color: #fff;
    font-weight: 500;

    height: 3rem;
    width: 13rem;
    
    margin: 5rem auto;
  }
`;

export const Permissions = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;

  margin-top: 4rem;
  margin-bottom: 1rem;

`;