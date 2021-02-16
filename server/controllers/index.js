const { clientError, serverError } = require('./errorHandle');
const { getComments, addComments } = require('./comments');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
} = require('./kindergarten');
const { getUsers, logout, addUsers, login } = require('./users');
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
  login,
  addUsers,
  logout,
};
