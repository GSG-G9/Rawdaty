const { addCommentsQuery, getCommentsQuery } = require('./comments');
const {
  getKindergartenQuery,
  getKindergartenById,
  getKindergartenId,
  getKindergartenSearch,
  addKindergartenQuery,
} = require('./kindergarten');
const { getUsersQuery } = require('./users');
const { getLocationsQuery } = require('./locations');

module.exports = {
  addKindergartenQuery,
  getKindergartenQuery,
  getKindergartenSearch,
  getKindergartenById,
  addCommentsQuery,
  getKindergartenId,
  getCommentsQuery,
  getUsersQuery,
  getLocationsQuery,
};
