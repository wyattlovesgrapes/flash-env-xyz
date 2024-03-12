import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactSubSuccess from '../components/ContactForm/ContactSubSuccess';
import Contributors from '../components/Contributors/Contributors';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
        
          <Route path="/" element={< LandingPage />} />
          <Route path="/contact" element={< ContactForm />} />
          <Route path="/contact-success" element={< ContactSubSuccess />} />
          <Route path="/contributors" element={< Contributors />} />
         
        </Routes>
        </div>  
    </Router>
  );
}

export default App;
