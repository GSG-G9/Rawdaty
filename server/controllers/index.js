const { clientError, serverError } = require('./errorHandle');
const { getComments, addComments } = require('./comments');
const { getKindergarten, getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');
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
};
