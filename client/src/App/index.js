import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import SideBar from '../Components/Layout/SideBar';
import Home from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import AuthContext from '../Context/AuthContext';
import LogoutContext from '../Context/LogoutContext';

import './style.css';

const App = () => {
  const [userData, setUserData] = useState({});
  const [isOK, setIsOk] = useState(false);
  const [role, setRole] = useState(null);

  const checkAuth = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/getAuthUser');
      setUserData(data);
      console.log({ dd: data.is_admin });
      setRole(data.is_admin === 'true' ? 'admin' : 'user');
      setIsOk(true);
      console.log(role);
    } catch (err) {
      setRole(null);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    checkAuth();
    return () => {
      source.cancel('clean up axios');
    };
  }, [role]);

  const logout = async () => {
    try {
      await axios.get('/api/v1/logout');
      setRole(null);
      setUserData({});
    } catch (err) {
      console.log('حدث خطء');
    }
  };

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{ role, userData, checkAuth }}>
          <LogoutContext.Provider value={{ logout }}>
            <NavBar />
            <Route exact path="/">
              <Home />
            </Route>
            <Footer />

            <Route exact path="/login">
              {!role ? <LoginPage /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/sign-up">
              {!role ? <LoginPage /> : <Redirect to="/" />}
            </Route>

            <Route path="/dashboard">
              {isOK && role !== 'admin' ? (
                <Redirect to="/" />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100vw',
                  }}
                >
                  <SideBar />
                  <div
                    style={{
                      width: '100vw',
                    }}
                  >
                    <NavBar />
                    <Route exact path="/dashboard/all" />
                    <Route exact path="/dashboard/add" />
                    <Route exact path="/dashboard/notification" />
                  </div>
                </div>
              )}
            </Route>
          </LogoutContext.Provider>
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
