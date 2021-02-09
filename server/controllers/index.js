const { clientError, serverError } = require('./errorHandle');
// const { verifyUser, verifyAdmin } = require('./auth');
const { getKindergartenById } = require('./kindergarten');

module.exports = {
  clientError,
  serverError,
  //   verifyUser,
  //   verifyAdmin,
  getKindergartenById,
};
