import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavTap from '../Components/Common/NavTap';

const App = () => (
  <Router>
    <div className="App" />
    <NavTap />
  </Router>
);

export default App;
