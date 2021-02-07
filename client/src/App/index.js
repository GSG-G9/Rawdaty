import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CommentContainer from '../Components/Common/CommentContainer';
import './style.css';

const data = [
  {
    isAdmin: true,
    userName: 'حنين أحمد',
    commentText: 'هذه روضة رائة اتمنى لها دوام التقدم والنجاح',
    date: '1 - مايو - 2021',
    rateValue: 3,
  },
  {
    isAdmin: true,
    userName: 'حنين أحمد',
    commentText: 'هذه روضة رائة اتمنى لها دوام التقدم والنجاح',
    date: '1 - مايو - 2021',
    rateValue: 2,
  },
  {
    isAdmin: false,
    userName: 'هدى',
    commentText: ' وهذه روضة رائة اتمنى لها دوام التقدم والنجاح',
    date: '1 - مايو - 2021',
    rateValue: 5,
  },
  {
    isAdmin: true,
    userName: 'حنين أحمد',
    commentText: 'هذه روضة رائة اتمنى لها دوام التقدم والنجاح',
    date: '1 - مايو - 2021',
    rateValue: 3,
  },
];
const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <CommentContainer data={data} />
  </Router>
);

export default App;
