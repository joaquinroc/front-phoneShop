import React from "react";
import { IProduct } from "../../../interface";

import Item from "../Item/Item";
import { ListContainer } from ".";

interface ListContainerProps {
  items: IProduct[];
}

function ListContainer2({ items }: ListContainerProps) {
 return (
    <ListContainer>
      {items.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </ListContainer>
  );
}

export default ListContainer2;
