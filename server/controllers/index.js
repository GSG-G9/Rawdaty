const { clientError, serverError } = require('./errorHandle');
const { getComments, addComments } = require('./comments');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
} = require('./kindergarten');
const { getUsers, logout } = require('./users');
const { getLocations } = require('./locations');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
  getUsers,
  getSpecificKindergarten,
  addComments,
  getComments,
  getLocations,
  kindergartenSearch,
  logout,
};
