import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import apiaxios from '../services/apiaxios'






export const Login = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await apiaxios.post("user/login",
        JSON.stringify({ username, password })
        ,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
      );
      console.log(JSON.stringify(response?.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage('invalid credentials');
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
        <Typography variant="h1" sx={{ fontSize: '22px' }}>Login</Typography>
        <TextField required id="username" label="Username" variant="outlined" autoFocus  onChange={(e) => setUsername(e.target.value)}
                        value={username} />
        <TextField required id="password" label="pasword" type="password" variant="outlined"  onChange={(e) => setPassword(e.target.value)}
                        value={password} />
        {errorMessage ? <Alert severity='error'>{'invalid credentials'}</Alert> : null}
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#000', my: 1, '&:hover': { backgroundColor: '#4a4a4a' } }}>Login</Button>
        <Typography sx={{ fontSize: '14px' }}>Don't have account? <Link to="/register">register now</Link> </Typography>
      </Box>
    </Box>
  )
}