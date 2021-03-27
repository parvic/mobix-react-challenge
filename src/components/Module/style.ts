import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  `;

export const ModuleWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(6, 1fr);
  background-color: ${theme.colors.modulesBackground};
  
  & > span {
    width: inherit;
    margin: 0 auto;
  }
`;