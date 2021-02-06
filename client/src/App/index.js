import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CommentContainer from '../Components/Common/CommentContainer';
import './style.css';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => (
  <Router>
    <div className="App">روضتي هنا</div>
    <CommentContainer data={data} />
  </Router>
);

export default App;
