import { ReactNode } from "react";
import { IProduct } from "../interface";

export interface DataProviderProps {
  children: ReactNode;
}

export interface DataContextProps {
  data: IProduct[];
  filteredData: IProduct[];
  setFilter: (filter: string) => void;
  setPriceRange?: (range: [number  , number]) => void;
}
