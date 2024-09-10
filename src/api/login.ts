import axios from "axios";
import { LogginData } from "./interface";

export async function handleLoggin(loginData: LogginData, navigate: (path: string) => void, setErrors: (message :string) => void  ): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:3000/register/login",
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
        if (response.status === 201) {
          navigate('/list');
        }
        if(response.status === 400) {
          setErrors("Cualquiera");
          
        }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
    
        setErrors(err.response.data.message || 'Error en la solicitud');
      } else {
    
        setErrors('Ocurrió un error desconocido');
      }
    }
}
