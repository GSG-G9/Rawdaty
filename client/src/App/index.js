import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';

import './style.css';

const App = () => (
  <Router>
    <NavBar userName="Alaa" />
    <Footer />
  </Router>
);

export default App;
