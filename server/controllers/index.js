const { clientError, serverError } = require('./errorHandle');
const { getKindergarten, getSpecificKindergarten } = require('./kindergarten');
const { getUsers } = require('./users');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
  getUsers,
  getSpecificKindergarten,
};
