import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import KindergartenProfilePage from '../containers/KindergartenProfilePage';

import './style.css';

const App = () => (
  <Router>
    <NavBar userName="Alaa" isAdmin="false" />
    <Switch>
      <Route
        exact
        path="/kindergarten/:kindergartenId"
        render={(props) => <KindergartenProfilePage {...props} />}
      />
    </Switch>
    <Footer />
  </Router>
);

export default App;
