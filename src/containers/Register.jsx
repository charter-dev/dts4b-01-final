import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import apiaxios from '../services/apiaxios'

export const Register = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password===passwordConfirmation){
      try {
        const response = await apiaxios.post("user/add",
          JSON.stringify({ username, password })
          ,
                  {
                      headers: { 'Content-Type': 'application/json' },
                      withCredentials: true
                  }
        );
        console.log(JSON.stringify(response?.data));
        navigate("/login");
      } catch (error) {
        console.log(error);
        setErrorMessage('save failed');
      }
    } else {
      setErrorMessage('Passwords dont match');
    }

    

  };


  return (
    <Box sx={{
      height: '83vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '30px',
        '& .MuiTextField-root': { my: 1, }
      }} component="form" onSubmit={handleSubmit}>
        <Typography variant="h1" sx={{fontSize: '22px'}}>Register</Typography>
        <TextField id="username" label="Username" variant="outlined" autoFocus  onChange={(e) => setUsername(e.target.value)}
                        value={username} />
        <TextField id="password" label="pasword" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
        <TextField id="passwordConfirmation" label="pasword Confirmation" type="password" variant="outlined" onChange={(e) => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}/>
        {errorMessage ? <Alert severity='error'>{'invalid credentials'}</Alert> : null}
        <Button type="submit" variant="contained" sx={{backgroundColor: '#000', my: 1, '&:hover': {backgroundColor: '#4a4a4a'}}}>Register</Button>
      </Box>
    </Box>
  )
}