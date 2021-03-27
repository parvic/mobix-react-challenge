import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  & > span {
    width: inherit;
    margin: 0 auto;
  }
`;

