import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterComponent from '../Components/Common/Footer';

import './style.css';

const App = () => (
  <Router>
    <div className="App" />
    <FooterComponent />
    <div className="App">روضتي هنا</div>
  </Router>
);

export default App;
