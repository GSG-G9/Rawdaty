import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImageGallery from '../Components/Common/ImageGallery';

import './style.css';

const App = () => (
  <Router>
    <ImageGallery />
  </Router>
);

export default App;
