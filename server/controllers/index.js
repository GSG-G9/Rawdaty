const { clientError, serverError } = require('./errorHandle');
const { getKindergarten, getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');
const { getLocations, postLocations } = require('./locations');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
  getUsers,
  getSpecificKindergarten,
  getLocations,
  postLocations,
};
