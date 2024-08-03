import React, { useState } from "react";
import { handleSend } from "../../api/register";
import { useNavigate } from "react-router-dom";
import {
  RegisterDiv,
  RegisterFormDiv,
  ImageDiv,
  RegisterImg,
  RegisterTitle,
  RegisterHeader,
  RegisterFooter,
  RegisterHeadrTitle,
} from "./index";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleSend(formData, navigate);
  };
  return (
    <RegisterDiv>
      <RegisterHeader>
        <RegisterHeadrTitle>Welcome to PhoneShop</RegisterHeadrTitle>
      </RegisterHeader>
      <ImageDiv>
        <RegisterImg src="\img\celulares.jpg" alt="" />
      </ImageDiv>

      <RegisterFormDiv>
        <RegisterTitle>REGISTER</RegisterTitle>
        <form className="pe-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              autoComplete="current-password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              value={formData.location}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </RegisterFormDiv>
      <RegisterFooter>
        <h6 style={{ marginRight: "20px" }}>Created by:</h6>
      </RegisterFooter>
    </RegisterDiv>
  );
}

export default Register;
