import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavTap from '../Components/Common/NavTap';
import './style.css';

const App = () => (
  <Router>
    <div className="App" />
    <NavTap />
  </Router>
);

export default App;
