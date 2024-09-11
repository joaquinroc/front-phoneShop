import styled from "styled-components";

export const FilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 20%;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  @media (max-width: 768px) {
    height: 15%;
    width: 100%;
    margin-right: 5%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1023px) {
    width: 15%;
  }
`;

export const BrandFilterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 15px;
  @media (min-width: 768px) {
    height: 10%;
    width: 100%;
  }
`;
export const BrandFilterTitle = styled.p`
  margin-bottom: 10px;
  color: black;
`;

export const PriceFilterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  padding: 0px 5px 0px 5px;
  margin-top: 20px;
`;

export const MinPrice = styled.p`
  display: flex;
  justify-content: start;
  width: 50%;
  margin-bottom: 5px;
`;
export const MaxPrice = styled.p`
  display: flex;
  justify-content: end;
  width: 50%;
  margin-bottom: 5px;
`;

export const RangeInput = styled.input`
  width: 100%;
  background-color: black;
`;
