import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { message } from 'antd';
import Search from '../../Components/Search';
import CardContainer from '../../Components/CardContainer';
import './style.css';

const HomePage = () => {
  const [kindergartensData, setKindergartensData] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`/api/v1/kindergarten`);
      const sortRes = data.sort((a, b) => {
        if (a.rating_average < b.rating_average) {
          return 1;
        }
        if (a.rating_average > b.rating_average) {
          return -1;
        }
        return 0;
      });
      setKindergartensData(sortRes);
    } catch (err) {
      message.error('خطأ في السيرفر يرجى المحاولة لاحقًا.');
    }
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
        <CardContainer data={kindergartensData} />
      </div>
    </div>
  );
};

export default HomePage;
