const { clientError, serverError } = require('./errorHandle');

const { getKindergarten } = require('./kindergartens');

module.exports = {
  clientError,
  serverError,
  getKindergarten,
};
