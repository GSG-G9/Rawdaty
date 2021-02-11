const { getKindergartenQuery, getKindergartenById } = require('./kindergarten');
const { getUsersQuery } = require('./users');
const { getLocationsQuery, postLocationsQuery } = require('./locations');

module.exports = {
  getKindergartenQuery,
  getKindergartenById,
  getUsersQuery,
  getLocationsQuery,
  postLocationsQuery,
};
