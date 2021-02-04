import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardComponent from '../Components/Common/Card';
import './style.css';

const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <CardComponent
      title=" النموذجية الخاصة روضة الامل المشرق"
      rating={4}
      reviewersNo={10}
      location="غزة-فلسطين"
      minPrice={200}
      maxPrice={600}
      cover="https://thumbs.dreamstime.com/b/group-preschool-children-engaged-handcrafts-group-preschool-kids-engaged-handcrafts-children-teacher-classroom-148143087.jpg"
      kindergartenId={1}
    />
  </Router>
);

export default App;
