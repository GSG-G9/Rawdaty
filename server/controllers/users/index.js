const getUsers = require('./getUsers');
const addUsers = require('./addUsers');
const login = require('./login');
const logout = require('./logout');
const getAuthUser = require('./getAuthUser');

module.exports = {
  getUsers,
  logout,
  login,
  addUsers,
  getAuthUser,
};
