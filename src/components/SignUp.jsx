import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Signup = () => {
  return (
    <div>
        <h1>Welcome to our MovieApp!!</h1>
        <br/><br/>
      <TextField variant='outlined' placeholder="Name" /><br/><br/>
      <TextField variant='outlined' placeholder='Email' type='email' /><br/><br/>
      <TextField variant='outlined' placeholder='Phone Number' /><br/><br/>
      <TextField variant='outlined' placeholder='Password' type='password' /><br/><br/><br/><br />
      <Button variant='contained' color='secondary'>SignUp</Button>
      <br/><br/>
      <p>Already have an account??</p>
      <br/><br/>
      <Button component={Link} to='/login' variant='contained' color='secondary'>Login</Button>
    </div>
  );
};

export default Signup;