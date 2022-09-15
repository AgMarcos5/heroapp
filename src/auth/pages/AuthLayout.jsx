import React, {useEffect} from 'react'
import './login.scss'

import { motion, useAnimation} from "framer-motion"
import batman from '../../assets/img/batman_ch.png'

import {variantsBg1, variantsBg2, variantsHeader} from './variantsLogin'
import { AuthErrorAlert } from '../components/AuthErrorAlert'


export const AuthLayout = ({children}) => {

  const animation = useAnimation()
  async function sequence() {
      await animation.start(variantsBg1)
      animation.start(variantsBg2)
  }

  useEffect(() => {
    document.body.className = 'login';
    sequence()
    return () => { 
      document.body.className = ''; 
    }
  }, []); 
    
  return (
      <>
      <AuthErrorAlert/>
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
        
        {children}
        
      </div>

      <motion.div 
        className='login-bg-container'
        key="bg"
        initial={{y: 200,opacity: .8}}
        animate={animation}
        exit={{ scale: 4, opacity: 0, transition: {
          duration: 2, 
    } }}
      >
        <div 
        className='login-bg'></div>
      </motion.div>
      </div>      
    </> 
  )
}