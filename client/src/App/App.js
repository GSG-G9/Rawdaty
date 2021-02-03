import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DropList from '../Components/Common/DropList';

import './App.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <DropList
      options={[
        { label: 'جميع المناطق', value: 1, disabled: true },
        { label: 'غزة', value: 2 },
        { label: 'خانيونس', value: 3 },
        { label: 'رفح', value: 4 },
        { label: 'نصيرات', value: 5 },
        { label: 'البريج', value: 6 },
        { label: 'القرارة', value: 7 },
        { label: 'المغازي', value: 8 },
        { label: 'المصدر', value: 9 },
        { label: 'غزة', value: 10 },
      ]}
    />
  </Router>
);

export default App;
