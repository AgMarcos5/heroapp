import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../store/auth/authSlice';

export const AuthErrorAlert = () => {

    const {errorMessage} = useSelector( state => state.auth)
    const [open, setOpen] = useState(!!errorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        setOpen(!!errorMessage)
    }, [errorMessage])

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpen(false);
        dispatch(resetError())
    }
    

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {errorMessage}
        </Alert>
    </Snackbar>
  );

}
