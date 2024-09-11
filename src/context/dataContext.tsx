import React, { useState, useEffect, useMemo } from "react";
import { DataContext } from "./context";
import getItemList from "../api/itemsList";
import { IProduct } from "../interface";
import { DataProviderProps, DataContextProps } from "./interface";

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<{ brand: string; minPrice: number; maxPrice: number }>({
    brand: "",
    minPrice: 0,
    maxPrice: 1000
  });

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
    const { brand, minPrice, maxPrice } = filter;
    return data.filter((product) => {
      const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
      const matchesBrand = brand ? product.brand.toLocaleLowerCase() === brand.toLocaleLowerCase() : true;
      return withinPriceRange && matchesBrand;
    });
  }, [filter, data]);

  const contextValue: DataContextProps = {
    data,
    filteredData,
    setFilter, 
    setPriceRange: (range) => setFilter({ ...filter, minPrice: range[0], maxPrice: range[1] })
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
export default DataProvider;
