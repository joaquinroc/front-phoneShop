import React from "react";
import { IProduct } from "../../../interface";

import Item from "../Item/Item";
import { ListContainer, NoContent } from ".";

interface ListContainerProps {
  items: IProduct[];
}

function ListContainer2({ items }: ListContainerProps) {
 return (
    <ListContainer>
      {items.length === 0 && (<NoContent>No hay nada</NoContent> ) }
      {items.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </ListContainer>
  );
}

export default ListContainer2;
