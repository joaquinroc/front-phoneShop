import styled from "styled-components";

export const RegisterDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: lightblue;
`;


export const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-item: center;
  padding-top: 70px;
  @media (max-width: 768px) {
    display: none;
  }
   
`;

export const RegisterImg = styled.img`
  width: 70%;
  height: 80%;
  border-radius: 30px;

   
`;

export const RegisterForm = styled.form`
  padding: 0px 30px;

   @media (min-width: 768px) {
    padding: 0% 15%;
  }

   @media (max-width: 768px) {
    padding: 0% 10%;
  }

   
`
export const RegisterFormDiv = styled.div`
  width: 50%;
  padding-top: 100px;
    @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RegisterButton = styled.button`
`

export const RegisterTitle = styled.h1`
  
  margin-bottom: 5%;
`;


