import React, { useState } from "react";
import { LoginContainer, LoginDiv, LoginDivTitle, LoginForm } from ".";
import { ILogin, ISetErrors } from "./interface";
import { handleLoggin } from "../../api/login";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Errors/ErrorMessage";


function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState<ILogin>({ email: "", password: "" });
  const [error, setError] = useState<ISetErrors>({emailError: "", passwordError: ""});
  

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  
  };

  const loggin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleLoggin(data, navigate, setError);
  };

  return (
    <LoginContainer>
      <LoginDiv>
        <LoginDivTitle>
          {" "}
          Ingresa tu e-mail y contraseña para ingresar a PhoneShop
        </LoginDivTitle>
      </LoginDiv>

      <LoginForm onSubmit={loggin}>
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={data.email}
            onChange={handleLogin}
          />
          {error.emailError && <ErrorMessage message={error.emailError}/>} 
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={handleLogin}
          />
          {error.passwordError && <ErrorMessage message={error.passwordError}/>}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
