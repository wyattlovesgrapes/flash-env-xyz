import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import flashEnvLogo from '../../assets/images/flash-env-logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <img src={flashEnvLogo} alt="flash_env logo" id='flash-env-logo'/>
      <h1>flash_env</h1>
      <p>move .env files from machine to machine using a flash drive</p>
      <p>-------------------------------------------------------------------------------------------------------</p>
      
      <div className="landing-button-container">

        <a href="https://pypi.org/project/happy-little-helpers/" target="_blank" rel="noopener noreferrer">
          <button>pypi</button>
        </a>
    {
      /*
        <Link to="/contact">
          <button>send us a message</button>
        </Link>
      */
    }
        <Link to="/contributors">
          <button>contribute?</button>
        </Link>
       
      </div>

    </div>
  );
};

export default LandingPage;
