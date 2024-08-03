import axios from "axios";
import { IProduct } from "../interface";

 async function getItemList(): Promise<IProduct[]> {
  try {
    const response = await axios.get<IProduct[]>("http://localhost:3000/products/phone", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default getItemList;