import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.section`
  width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2.5rem;
  .buttons-container {
    display: flex;
    justify-content: space-between;
  }
`;
