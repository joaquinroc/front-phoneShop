import React, {useContext } from "react";

import { MainContainer } from ".";

import Filter from "./Filter/Filter";
import { DataContext } from "../../context/context";
import ListContainer2 from "./List/ListContainer";


function ItemList() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("ItemList must be used within a DataProvider");
  }

  const { filteredData } = context;
  console.log(filteredData, "aca");

  return (
    <>
      
      <MainContainer>
        <Filter />
        <ListContainer2 items={filteredData} />
      </MainContainer>
      
    </>
  );
}

export default ItemList;
