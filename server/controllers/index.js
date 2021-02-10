const { clientError, serverError } = require('./errorHandle');
const { getSpecificKindergarten } = require('./kindergarten');

module.exports = {
  clientError,
  serverError,
  getSpecificKindergarten,
};
