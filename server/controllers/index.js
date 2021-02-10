const { clientError, serverError } = require('./errorHandle');
// const { verifyUser, verifyAdmin } = require('./auth');
const { getSpecificKindergarten } = require('./kindergarten');

module.exports = {
  clientError,
  serverError,
  getSpecificKindergarten,
};
