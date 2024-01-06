import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <Link to="/home">
          Track My Workout
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AuthNavbar;