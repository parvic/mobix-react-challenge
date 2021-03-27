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
  grid-template-columns: repeat(6, 1fr);

  margin-top: 4rem;
  margin-bottom: 1rem;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    margin: 0 auto;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: ${theme.colors.titleBackground};

 & > span {
    width: inherit;
    margin: 0 auto;
  }
`;
