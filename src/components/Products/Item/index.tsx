import styled from "styled-components";

export const ItemCard = styled.div`
border-radius: 5px;
border: 1px solid black;
padding: 5px 15px;
display: flex;
flex-direction: column;
justify-content: center;

background-color: white;

@media (max-width: 768px) {
   width: 45%;
  }

  @media (min-width: 768px) {
   width: 45%;
  }


`
export const ItemBrandName = styled.h4`
margin-bottom: 10px;
`
export const ItemCardImage = styled.div`
display:flex;
justify-content:center;
margin-bottom: 20px;
`

export const ItemImage = styled.img`
width: 100px;
`

export const ItemCardInfo = styled.div`

`
export const ItemCardSubInfo = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
padding: 5px 5px;
`

export const ItemCardButton = styled.button`
background-color: black;
color: white;
border-radius: 5px;
padding: 5px 20px;
margin-top: 20px;
`