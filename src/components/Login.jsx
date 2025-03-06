import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Welcome to our MovieApp!!</h1>
      <br/>

      <TextField variant='outlined' placeholder='Email' type='email' /><br/><br/>
      <TextField variant='outlined' placeholder='Password' type='password' /><br/><br/><br/><br />
      <Button variant='contained' color='secondary'>Login</Button>
      <br/><br/>
      <p>Don't have an account?</p>
      <br/>
      <Button component={Link} to='/signup' variant='contained' color='secondary'>SignUp</Button>
    </div>
  );
};

export default Login;
