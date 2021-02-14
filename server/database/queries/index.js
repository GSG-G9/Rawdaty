const { addCommentsQuery, getCommentsQuery } = require('./comments');
const {
  getKindergartenQuery,
  getKindergartenById,
  getKindergartenId,
  getKindergartenSearch,
} = require('./kindergarten');
const {
  getUsersQuery,
  checkEmail,
  getUserKindergartenInfo,
} = require('./users');
const { getLocationsQuery } = require('./locations');

module.exports = {
  getKindergartenQuery,
  getKindergartenSearch,
  getKindergartenById,
  addCommentsQuery,
  getKindergartenId,
  getCommentsQuery,
  getUsersQuery,
  getLocationsQuery,
  checkEmail,
  getUserKindergartenInfo,
};
