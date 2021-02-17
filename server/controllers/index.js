const { clientError, serverError } = require('./errorHandle');
const { getComments, addComments } = require('./comments');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  addKindergarten,
} = require('./kindergarten');
const { getUsers, logout, addUsers, login, getAuthUser } = require('./users');
const { getLocations, postLocations } = require('./locations');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
  getUsers,
  getSpecificKindergarten,
  addComments,
  getComments,
  getLocations,
  postLocations,
  kindergartenSearch,
  addKindergarten,
  login,
  addUsers,
  logout,
  getAuthUser,
};
