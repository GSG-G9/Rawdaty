const { clientError, serverError } = require('./errorHandle');
const { getComments, addComments } = require('./comments');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  deleteKindergarten,
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
  deleteKindergarten,
  login,
  addUsers,
  logout,
  getAuthUser,
};
