const { clientError, serverError } = require('./errorHandle');
const { getSpecificKindergarten } = require('./kindergarten');
const { addComments } = require('./comments');

module.exports = {
  clientError,
  serverError,
  getSpecificKindergarten,
  addComments,
};
