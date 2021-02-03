import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardComponent from '../Components/Common/Card';
import './App.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <CardComponent
      title="روضة الامل المشرق"
      rating={2}
      reviewersNo={10}
      location="غزة-فلسطين"
      price="200-500 شيكل"
      cover="https://thumbs.dreamstime.com/b/group-preschool-children-engaged-handcrafts-group-preschool-kids-engaged-handcrafts-children-teacher-classroom-148143087.jpg"
      kindergartenId={1}
    />
  </Router>
);

export default App;
