import React from 'react';

import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

function DropList() {
  return (
    <>
      <Select
        labelInValue
        defaultValue={{ value: 'كل المناطق' }}
        style={{ width: 120 }}
      >
        <Option value="All">كل المناطق</Option>
        <Option value="Gaza">غزة</Option>
        <Option value="Khanyonis">خانيونس</Option>
        <Option value="Rafah">رفح</Option>
        <Option value="Nisrat">نصيرات</Option>
        <Option value="Deir Albalah">دير البلح</Option>
        <Option value="Breij">البريج</Option>
        <Option value="Grara">القرارة</Option>
        <Option value="Maghazi">المغازي</Option>
        <Option value="Msadar">المصدر</Option>
      </Select>
    </>
  );
}

export default DropList;
