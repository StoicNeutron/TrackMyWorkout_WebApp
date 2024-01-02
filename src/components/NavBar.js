import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <Link to="/auth">
          <Button variant="contained">Sign In</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;