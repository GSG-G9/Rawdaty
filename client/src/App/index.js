import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import axios from 'axios';
import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import SideBar from '../Components/Layout/SideBar';
import Home from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import AuthContext from '../Context/AuthContext';

import './style.css';

const App = () => {
  const [userData, setUserData] = useState({});
  const [role, setRole] = useState(null);
  const fetchUserData = async () => {
    try {
      // const {
      //   data: { data },
      // } = await axios.get('/api/v1/me');
      const data = {
        id: 1,
        userName: 'أحمد',
        isAdmin: 'false',
        kindergartens: [
          {
            id: 1,
            kindergartenName: 'الفجر',
          },
          {
            id: 2,
            kindergartenName: 'الزهراء',
          },
        ],
      };
      setUserData(data);
      setRole(data.isAdmin ? 'admin' : 'user');
    } catch (err) {
      setRole(null);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [role]);

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{ role, userData }}>
          <Route path="/">
            <NavBar userName={userData.userName} isLogged={Boolean(role)} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Footer />
          </Route>

          <Route path="/dashboard">
            {role === 'admin' ? (
              <>
                <NavBar userName={userData.userName} isLogged isAdmin />
                <Route exact path="/dashboard/all">
                  all
                </Route>
                <Route exact path="/dashboard/add">
                  add
                </Route>
                <Route exact path="/dashboard/notification">
                  notification
                </Route>
                <SideBar />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
