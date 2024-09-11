import React from "react";
import { IProduct } from "../../../interface/index";
import {
  ItemBrandName,
  ItemCard,
  ItemCardButton,
  ItemCardImage,
  ItemCardInfo,
  ItemCardSubInfo,
  ItemImage,
} from "./index";
import { ItemProps } from "./item.interface";



function Item({data}: ItemProps) {

  return (
    <ItemCard>
      <ItemBrandName>{data.brand}</ItemBrandName>
      <ItemCardImage>
        <ItemImage src="\public\img\celular.jpg"></ItemImage>
      </ItemCardImage>
      <ItemCardInfo>
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
