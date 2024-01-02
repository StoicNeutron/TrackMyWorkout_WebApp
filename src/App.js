import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from "./AuthPage";
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;