import React from 'react'
import { Navigate } from 'react-router-dom'
import { CheckingAuth } from '../auth/components/CheckingAuth';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const PrivateRoute = ({children}) => {
  
  const {status} = useCheckAuth();

  if(status === 'checking') return <CheckingAuth/>

  return (status === 'authenticated')
    ? children
    :   <Navigate to='/auth/login'/>
}
