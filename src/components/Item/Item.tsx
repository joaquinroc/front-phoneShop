import React from "react";
import { IProduct } from "../../interface";
import {
  ItemCard,
  ItemCardButton,
  ItemCardImage,
  ItemCardInfo,
  ItemCardSubInfo,
} from "./index";

function Item(data: IProduct) {

  return (
    <ItemCard>
      <ItemCardImage>
        <h1>{data.image}</h1>
      </ItemCardImage>
      <ItemCardInfo>
        <h4>{data.brand}</h4>

        <ItemCardSubInfo>
          <h3>{data.name}</h3>
          <h4>{data.model}</h4>
        </ItemCardSubInfo>
        <p>{data.description}</p>
        <h3>U$S: {data.price}</h3>
        
      </ItemCardInfo>
      <ItemCardButton disabled> Agregar </ItemCardButton>
    </ItemCard>
  );
}

export default Item;
