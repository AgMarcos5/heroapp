import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './login.scss'

import { motion, useAnimation} from "framer-motion"
import batman from '../../assets/img/batman_ch.png'
import { useForm } from '../../hooks/useForm'

import {variantsBg1, variantsBg2, variantsForm, variantsHeader} from './variantsLogin'


export const LoginPage = () => {

  const navigate = useNavigate()
  const {formState,onInputChange} = useForm({username: ""})
  const {username} = formState
  const {login} = useContext(AuthContext)

  
  const { logged } = useContext(AuthContext)
  
  const animation = useAnimation()
    async function sequence() {
        await animation.start(variantsBg1)
        animation.start(variantsBg2)
    }


  useEffect(() => {
    if(logged) navigate('/', {replace:true})
    document.body.className = 'login';
    sequence()
    return () => { 
      document.body.className = ''; 
    }
  }, []);

  

  
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(username.length <= 1) return;
    login(username)
    navigate('/', {replace:true})
  }

    
  return (
      <>
      <div className='container'>
      <div className='login-content'>
        <motion.h1
        key="h1"
        initial="hidden"
        animate="visible"
        variants={variantsHeader}        
        exit={{ y: -50, 
                opacity: 0, 
                transition: {
                  ease: "backOut",
                  duration: 1,
                } 
              }}
        >
          hero <img src={batman} alt="batman" /> app
        </motion.h1>
        
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
            <input type="text" 
                name="username" 
                placeholder='Escribe tu nombre de héroe'
                value={username}
                onChange={onInputChange}
            />
              
            <button 
                className='btn'
                type='submit'>
                Comenzar
            </button>
          </form>
        </motion.span>
      </div>

      <motion.div 
        className='login-bg'
        key="bg"
        initial={{y: 200,opacity: .8}}
        animate={animation}
        exit={{ scale: 4, opacity: 0, transition: {
          duration: 2, 
    } }}
      ></motion.div>
      </div>      
    </> 
  )
}
