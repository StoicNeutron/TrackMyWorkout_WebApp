import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ({ onToggle }) => {
  return (
    <div>
      <h2>Login</h2>
      <form style={{ width: '400px'}}>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p>
        Don't have an account? <Link to="#" onClick={onToggle}>Sign Up</Link>
      </p>
    </div>
  );
};

const SignUp = ({ onToggle }) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form style={{ width: '400px' }}>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Email" type="email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account? <Link to="#" onClick={onToggle}>Login</Link>
      </p>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login onToggle={handleToggle} /> : <SignUp onToggle={handleToggle} />}
    </div>
  );
};

export default AuthPage;
