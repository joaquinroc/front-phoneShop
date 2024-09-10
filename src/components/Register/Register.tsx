import React, { useState } from "react";
import { handleRegister } from "../../api/register";
import { useNavigate } from "react-router-dom";
import {
  RegisterDiv,
  RegisterFormDiv,
  ImageDiv,
  RegisterImg,
  RegisterTitle,
  RegisterForm,
  RegisterButton,
} from "./index";

import { RegisterValidation } from "../../api/interface";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterValidation>({
    name: "",
    email: "",
    password: "",
    rptPassword: "",
    location: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterValidation>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, rptPassword, location } = formData;
    const tempErrors: Partial<RegisterValidation> = {};
    if (!name) {
      tempErrors.name = "Name is required";
    }

    if (!email) {
      tempErrors.email = "Email is required";
    }

    if (!password) {
      tempErrors.password = "Password is required";
    }

    if (formData.password !== formData.rptPassword) {
      tempErrors.rptPassword = "Passwords do not match";
    }

    if (!formData.location) {
      tempErrors.location = "Location is required";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    await handleRegister(formData, navigate);
  };
  return (
    <RegisterDiv>
      <ImageDiv>
        <RegisterImg src="\img\celulares.jpg" alt="" />
      </ImageDiv>

      <RegisterFormDiv>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterTitle>REGISTER</RegisterTitle>
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
            {errors.name && <div className="text-danger">{errors.name}</div>}
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
            {errors.email && <div className="text-danger">{errors.email}</div>}
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
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Repeat Password</label>
            <input
              type="password"
              className="form-control"
              name="rptPassword"
              placeholder="Password"
              onChange={handleChange}
              value={formData.rptPassword}
              autoComplete="current-password"
            />
            {errors.rptPassword && (
              <div className="text-danger">{errors.rptPassword}</div>
            )}
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
            {errors.location && (
              <div className="text-danger">{errors.location}</div>
            )}
          </div>
          <RegisterButton type="submit" className="btn btn-primary">
            Register
          </RegisterButton>
        </RegisterForm>
      </RegisterFormDiv>
    </RegisterDiv>
  );
}

export default Register;
