const { addCommentsQuery, getCommentsQuery } = require('./comments');
const {
  getKindergartenQuery,
  getKindergartenById,
  getKindergartenId,
  getKindergartenSearch,
  addKindergartenQuery,
  deleteKindergartenQuery,
  getKindergartensByUserId,
} = require('./kindergarten');
const {
  getUsersQuery,
  addUsersQuery,
  checkEmail,
  getUserInfoById,
} = require('./users');
const { getLocationsQuery, postLocationsQuery } = require('./locations');

module.exports = {
  addKindergartenQuery,
  getKindergartenQuery,
  getKindergartenSearch,
  getKindergartenById,
  addCommentsQuery,
  getKindergartenId,
  deleteKindergartenQuery,
  getCommentsQuery,
  getUsersQuery,
  getLocationsQuery,
  addUsersQuery,
  checkEmail,
  postLocationsQuery,
  getUserInfoById,
  getKindergartensByUserId,
};
