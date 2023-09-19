import React from 'react';
import './App.css';
import Login from './Login/Loginjs';
import Signup from './Signup/Signupjs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
    
      </header>
    </div>
  );
}

export default App;