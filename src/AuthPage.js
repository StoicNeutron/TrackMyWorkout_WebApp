import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthNavbar from './components/AuthNavBar';

const SignIn = ({ onToggle }) => {
  return (
    <div>
    <div>
      <AuthNavbar/>
    </div>
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form style={{ width: '400px' }}>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Sign In
        </Button>
      </form>
      <p>
        Don't have an account? <Link to="#" onClick={onToggle}>Sign Up</Link>
      </p>
    </div>
    </div>
  );
};

const SignUp = ({ onToggle }) => {

  const handleSignUp = async () => {

    console.log('Sign Up button clicked');
    // Get the values from the text fields
    const usernameInput = document.getElementById('Username').value;
    const passwordInput = document.getElementById('Password').value;
    const emailInput = document.getElementById('Email').value;
    try {
      // Make API call when Sign Up button is clicked
      const response = await fetch('http://localhost:8080/new_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Adjust the content type as needed
        },
        body: JSON.stringify({
          userName: usernameInput,
          passWord: passwordInput,
          email: emailInput,
        }),
      });
  
      if (response.ok) {
        await response.json();
        // Handle the data from the server
      } else {
        // Handle non-successful response (e.g., display an error message)
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <div>
      <AuthNavbar/>
    </div>
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form style={{ width: '400px' }}>
        <TextField id="Username" label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField id="Email" label="Email" type="email" variant="outlined" margin="normal" fullWidth />
        <TextField id="Password" label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account? <Link to="#" onClick={onToggle}>Sign In</Link>
      </p>
    </div>
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
      {isLogin ? <SignIn onToggle={handleToggle} /> : <SignUp onToggle={handleToggle} />}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // 100% of the viewport height
  },
  form: {
    width: '200px',
    margin: '50px auto',
  },
};

export default AuthPage;
