import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const onLogin = () => {
      login("Marcos Aguero")
      navigate('/', {
          replace: true
      })
  }
    
  return (
    <div className='container mt-5'>
      <h1>LoginPage</h1>
        <hr/>
        <button 
          className='btn btn-primary'
          onClick={onLogin}>
          Back
        </button>
    </div>
  )
}
