import styled from "styled-components";

export const FilterContainer = styled.form`
display: flex;
flex-direction: column;
width: 15%;
height: 25%;
justify-content: space-around;
margin-top: 20px;
margin-left: 20px;
border: 1px solid black;
padding: 10px;
border-radius: 5px;
background-color: white;
`

export const FilterDiv = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: space-around;
font-size: 20px;

`

export const FilterInfo = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
margin-bottom: 10px;
padding-bottom: 5px;

`

export const FilterCheckBox = styled.input`
  margin-right: 15%;
  transform: scale(1.1);
  

`

export const FilterBranName = styled.h6``


export const FilterSubDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`

export const FilterNumInput = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 30px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ccc; /* Puedes personalizar el borde */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para Firefox */
  -moz-appearance: textfield;

`

