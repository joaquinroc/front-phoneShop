import { createContext } from "react";
import { DataContextProps } from "./interface";

export const DataContext = createContext<DataContextProps | undefined>(undefined);