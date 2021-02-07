import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterComponent from '../Components/Common/Footer';
import './style.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <div className="footer-dx">
      <FooterComponent />
    </div>
  </Router>
);

export default App;
