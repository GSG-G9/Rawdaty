const { addCommentsQuery, getCommentsQuery } = require('./comments');
const {
  getKindergartenQuery,
  getKindergartenById,
  getKindergartenId,
  getKindergartenSearch,
  deleteKindergartenQuery,
} = require('./kindergarten');
const { getUsersQuery } = require('./users');
const { getLocationsQuery } = require('./locations');

module.exports = {
  getKindergartenQuery,
  getKindergartenSearch,
  getKindergartenById,
  addCommentsQuery,
  getKindergartenId,
  deleteKindergartenQuery,
  getCommentsQuery,
  getUsersQuery,
  getLocationsQuery,
};
