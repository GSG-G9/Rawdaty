const { clientError, serverError } = require('./errorHandle');
const { getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');

module.exports = {
  clientError,
  serverError,
  getUsers,
  getSpecificKindergarten,
};
