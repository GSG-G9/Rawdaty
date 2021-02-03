import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardComponent from '../Components/Common/Card';
import './App.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <CardComponent />
  </Router>
);

export default App;
