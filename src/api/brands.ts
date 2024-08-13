import axios from "axios";
import { IBrand } from "../interface";


 async function getBrands(): Promise<IBrand[]> {
  try {
    const response = await axios.get<IBrand[]>("http://localhost:3000/products/brand", {
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
export default getBrands;