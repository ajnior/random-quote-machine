import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d1f3fa;
  font-family: "Roboto Slab", sans-serif;
`;

export const Box = styled.section`
  width: 50%;
  border-radius: 5px;
  padding: 2.5rem;
  background: #ffffff;
  box-shadow: 0px 2px 5px -3px #64a3b1;
  .buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
  #text {
    font-weight: 300;
    letter-spacing: 0.02rem;
    line-height: 2.2rem;
  }
  #author {
    font-size: 1.2rem;
  }
`;
