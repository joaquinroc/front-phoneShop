import React, { useState, useEffect, useMemo } from "react";
import { DataContext } from "./context";
import getItemList from "../api/itemsList";
import { IProduct } from "../interface";
import { DataProviderProps, DataContextProps } from "./interface";

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [princeRange, setPriceRange] = useState<[number, number]>([0,0])
  useEffect(() => {
    async function getData() {
      try {
        const result = await getItemList();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  const filteredData = useMemo(() => {
    if (!filter) return data;

    return data.filter(
      (product) => product.brand.toLocaleLowerCase() === filter.toLocaleLowerCase()
    );
  }, [filter, data]);

  const contextValue: DataContextProps = {
    data,
    filteredData,
    setFilter,
    setPriceRange
    
  };

  
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}



export default DataProvider;
