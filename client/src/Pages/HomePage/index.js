import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { message } from 'antd';
import Search from '../../Components/Search';
import CardContainer from '../../Components/CardContainer';
import './style.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`/api/v1/kindergarten`)
      .then(({ data: { data: response } }) => {
        setData(response);
      })
      .catch(() => message.err('خطأ في السيرفر يرجى المحاولة لاحقًا.'));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="header-image">
        <p className="header-image-title">
          المنصة الأولى لمساعدتكم في اختيار روضة أبنائكم
        </p>
      </div>
      <div className="imported-component-container">
        <Search dorpListOptions={[{ id: 2, value: 'asda', disabled: false }]} />
        <CardContainer data={data} />
      </div>
      {/* <h1>Alaa</h1> */}
    </div>
  );
};

export default HomePage;
