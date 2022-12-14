import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

import { motion} from "framer-motion";
import { useForm } from "../../hooks/useForm";

import {
  variantsForm,
} from "./variantsLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { TextField } from "@mui/material";

import GoogleIcon from '@mui/icons-material/Google';

const formData = {
  email: "",
  password: ""
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [(value) => value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    ), "El correo debe tener un formato valido"]
  ],
  password: [
    [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
    ]
  ],
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const [formSubmited, setFormSubmited] = useState(false);  

  const {
    formState,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  useEffect(() => {
    if (status === "authenticated") navigate("/marvel", { replace: true });
  }, [status]);

  return (
    <>
      <motion.span
        key="form"
        initial="hidden"
        animate="visible"
        variants={variantsForm}
        exit={{
          x: -50,
          opacity: 0,
          transition: {
            ease: "backInOut",
            duration: 0.8,
            delay: 0.3,
          },
        }}
      >
        <form onSubmit={onFormSubmit} autoComplete="off">

        
        <TextField
            variant="filled"
              className='input'
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={formSubmited && emailValid}
            />
            
            
            <TextField
            variant="filled"
              className='input'
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={formSubmited && passwordValid}
            />

          <div className="buttons">
            <button className="btn" type="submit">
              Comenzar
            </button>

            <button className="btn" type="button" onClick={onGoogleSignIn}>
              <GoogleIcon/>
            </button>
          </div>

          <Link to="/auth/register">Crear una cuenta</Link>
        </form>
      </motion.span>
    </>
  );
};
