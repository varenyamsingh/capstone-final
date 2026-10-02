import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to Medical Records System</h1>
      <button 
        className="welcome-btn"
        onClick={() => navigate('/form')}
      >
        Welcome
      </button>
    </div>
  );
}

export default Welcome;
