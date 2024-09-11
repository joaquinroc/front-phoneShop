import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 5%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 70%;
    
     margin-left: 1%;
  }

  @media (min-width: 1023px) {
    width: 80%;
    padding: 0px 50px;
    
  }
`;

export const NoContent = styled.div`
display: flex;

`
