import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import Home from '../Pages/HomePage';
import Signup from '../Pages/Signup';
import './style.css';

const App = () => (
  <Router>
    <NavBar userName="Alaa" isAdmin={false} />
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
