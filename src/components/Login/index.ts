import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  flex-wrap: wrap;
  display: flex;
  background-color: lightblue;
  padding: 0% 10% 0% 10%;
`;

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0% 10% 0% 10%;
  @media (min-width: 768px) {
    width: 50%;
    padding-top: 20%;
    align-items: stretch;
  }
`;

export const LoginDivTitle = styled.h3`
  border-bottom: 1px solid black;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    border-bottom: none;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  padding: 0% 10% 0% 10%;
  @media (min-width: 768px) {
    width: 50%;
    padding: 10%;
  }
`;
