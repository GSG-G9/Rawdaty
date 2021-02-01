import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import frFR from 'antd/lib/locale/ar_EG';

import App from './App';

ReactDOM.render(
  <Router>
    <ConfigProvider locale={frFR}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);
