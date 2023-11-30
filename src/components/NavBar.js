import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <div style={styles.brand}>Track My Workout</div>
      <div style={styles.loginButton}>Login</div>
    </nav>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  loginButton: {
    cursor: 'pointer',
    padding: '8px 16px',
    backgroundColor: '#61dafb',
    color: '#fff',
    borderRadius: '4px',
  },
};

export default NavBar;