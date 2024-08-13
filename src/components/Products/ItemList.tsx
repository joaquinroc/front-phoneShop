import React, { useState, useEffect, useContext } from "react";

import { MainContainer } from ".";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Filter from "./Filter/Filter";
import { DataContext } from "../../context/context";
import ListContainer2 from "./List/ListContainer";
import DataProvider from "../../context/dataContext";

function ItemList() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("ItemList must be used within a DataProvider");
  }

  const { filteredData } = context;
  console.log(filteredData, "aca");

  return (
    <>
      <Header />
      <MainContainer>
        <Filter />
        <ListContainer2 items={filteredData} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default ItemList;
