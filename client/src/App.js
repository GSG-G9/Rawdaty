import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rating from './components/common/Rating';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      روضتي هنا
      <Rating />
    </div>
  </Router>
);

export default App;
