import axios from "axios";
import { LogginData } from "./interface";
import { ISetErrors } from "../components/Login/interface";

export async function handleLoggin(
  loginData: LogginData,
  navigate: (path: string) => void,
  setErrors: (message: ISetErrors) => void
): Promise<void> {
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
      navigate("/list");
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        const status = err.response.status;
        if (status === 400) {
          const message = err.response.data.message;
          if (message === "El usuario no existe") {
            setErrors({
              emailError: "El usuario no existe",
              passwordError: "",
            });
          } else if (message === "Contraseña incorrecta") {
            setErrors({
              emailError: "",
              passwordError: "Contraseña incorrecta",
            });
          }
        } else if (status === 500) {
          setErrors({
            emailError: "",
            passwordError: "",
            otherError: "Tenemos un error, estamos trabajando en ello",
          });
        }
      } else {
        setErrors({
          emailError: "",
          passwordError: "",
          otherError: "Tenemos un error, estamos trabajando en ello",
        });
      }
    }
  }
}
