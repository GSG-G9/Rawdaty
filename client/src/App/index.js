import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import Home from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

import './style.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact to="/login">
        <LoginPage />
      </Route>
      <Route exact to="/">
        <NavBar userName="Alaa" isAdmin={false} />
        <Home />
        <Footer />
      </Route>
    </Switch>
  </Router>
);

export default App;
