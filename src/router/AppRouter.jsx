import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


import { AnimatePresence } from "framer-motion";

export const AppRouter = () => {
  
  const location = useLocation();
  return (
    <>        
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>

      <Route 
        path='login' 
        element={
        <PublicRoute>
          <LoginPage/>
        </PublicRoute>
        }
      />

      <Route 
        path='/*' 
        element={
        <PrivateRoute>
          <HeroesRoutes/>
        </PrivateRoute>
        }
      />

    </Routes>
    </AnimatePresence>
    </>
  )
}
