import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DropList from './Components/DorpList';

import './App.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <DropList />
  </Router>
);

export default App;
