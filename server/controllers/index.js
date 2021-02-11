const { clientError, serverError } = require('./errorHandle');
const { getKindergarten, getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');
const { getLocations } = require('./locations');
const { addComments } = require('./comments');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
  getUsers,
  getSpecificKindergarten,
  addComments,
  getLocations,
};
