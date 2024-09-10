import axios from "axios";
import { RegisterValidation } from "./interface";

export async function handleRegister(formData: RegisterValidation, navigate: (path: string) => void): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:3000/register/",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
        if (response.status === 201) {
          navigate('/list');
        }
    } catch (error) {
      console.error("Error:", error);
    }
}