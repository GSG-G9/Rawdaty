const { clientError, serverError } = require('./errorHandle');
const { getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');
const { getLocations } = require('./locations');

module.exports = {
  clientError,
  serverError,
  getUsers,
  getSpecificKindergarten,
  getLocations,
};
