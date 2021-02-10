const { clientError, serverError } = require('./errorHandle');
const { getSpecificKindergarten } = require('./kindergarten');
const { getComments } = require('./comments');

module.exports = {
  clientError,
  serverError,
  getSpecificKindergarten,
  getComments,
};
