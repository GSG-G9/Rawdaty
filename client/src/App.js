import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainButton from './component/common/MainButton';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <MainButton
        backgroundColor="#739c98"
        border="3px solid #69938f"
        color="#fff"
        padding="9px 15px"
        Buttontext="Submit"
      />
    </div>
  </Router>
);

export default App;
