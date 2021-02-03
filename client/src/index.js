import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import Arabic from 'antd/lib/locale/ar_EG';

import App from './App/App';

ReactDOM.render(
  <ConfigProvider direction="rtl" locale={Arabic}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
