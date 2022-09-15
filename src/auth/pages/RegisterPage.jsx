import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss'

import { motion} from "framer-motion"
import { useForm } from '../../hooks/useForm'

import {variantsForm} from './variantsLogin'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmail } from '../../store/auth/thunks'
import { Button, Grid, TextField, Typography } from "@mui/material";


const formData = {
  email: "",
  password: "",
  displayName: "",
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
  displayName: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
  ],
};



export const RegisterPage = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);  
  
  const { status } = useSelector((state) => state.auth);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmail(formState))
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
        exit={{ x: -50, 
                opacity: 0, 
                transition: {
                  ease: "backInOut",
                  duration: 0.8,
                  delay: .3
                } 
              }}
        >

          <form onSubmit={onFormSubmit} autoComplete="off">
            
            <TextField
            variant="filled"
              className='input'
              label="Nombre de usuario"
              type="text"
              placeholder="Nombre de usuario"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={formSubmited && displayNameValid}
            />

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
              
            <button 
                className='btn'
                type='submit'>
                Crear cuenta
            </button>

            <Link to="/auth/login">Ya tengo una cuenta</Link>
          </form>

        </motion.span>
    </> 
  )
}
