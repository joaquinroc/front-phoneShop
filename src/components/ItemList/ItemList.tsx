import React, { useState, useEffect } from "react";
import getItemList from "../../api/itemsList";
import Item from "../Item/Item";
import { IProduct } from "../../interface";
import { ItemListContainer } from ".";

function ItemList() {
  const [products, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getItemList();
        setProduct(result);
      } catch (error) {
        console.log("Error");
      }
    };

    getData();
  }, []);
  return (
    <>
    <ItemListContainer>
      {!products.length && <h1>Hola</h1>}
      {products.map((product, index) => {
        
        return <Item key={index} {...product} />;
      })}
    </ItemListContainer>
    </>
  );
}

export default ItemList;
