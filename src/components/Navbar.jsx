import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit' component={Link} to='/signup'>SignUp</Button>
        <Button color='inherit' component={Link} to='/login'>Login</Button>
        <Button color='inherit' component={Link} to='/add-movies'>Add Movies</Button>
        <Button color='inherit' component={Link} to='/list-movies'>List Movies</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;