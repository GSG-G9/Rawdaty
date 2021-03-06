import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import { notification } from 'antd';

import NavBar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import KindergartenProfilePage from '../Pages/KindergartenProfilePage';

import SideBar from '../Components/Layout/SideBar';
import Home from '../Pages/HomePage';
import Signup from '../Pages/Signup';
import LoginPage from '../Pages/LoginPage';
import AuthContext from '../Context/AuthContext';
import LogoutContext from '../Context/LogoutContext';
import About from '../Pages/ِAboutPage';
import SearchPage from '../Pages/SearchPage';

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
      setRole(data.is_admin === 'true' ? 'admin' : 'user');
      setIsOk(true);
    } catch (error) {
      setRole(null);
      setUserData({});
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
      const source = axios.CancelToken.source();
      await axios.get('/api/v1/logout');
      setRole(null);
      setUserData({});
      return () => {
        source.cancel('clean up axios');
      };
    } catch (err) {
      return notification.open({
        message: 'حدث خطأ في السيرفر, يرجى المحاولة لاحقا',
      });
    }
  };

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{ role, userData, checkAuth }}>
          <LogoutContext.Provider value={{ logout }}>
            <Route
              exact
              path={['/', '/about', '/kindergarten/:kindergartenId', '/search']}
            >
              <NavBar />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/search">
              <SearchPage />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route
              exact
              path="/kindergarten/:kindergartenId"
              render={(props) => <KindergartenProfilePage {...props} />}
            />

            <Route exact path="/login">
              {!role ? <LoginPage /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path={['/', '/about', '/kindergarten/:id', '/search']}>
              <Footer />
            </Route>

            {isOK && role === 'admin' && (
              <Route path="/dashboard">
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
              </Route>
            )}
          </LogoutContext.Provider>
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
