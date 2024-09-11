import { ReactNode } from "react";
import { IProduct } from "../interface";

export interface DataProviderProps {
  children: ReactNode;
}

export interface DataContextProps {
  data: IProduct[];
  filteredData: IProduct[];
  setFilter: (filter: { brand: string; minPrice: number; maxPrice: number }) => void;
  setPriceRange?: (range: [number, number]) => void;
}
