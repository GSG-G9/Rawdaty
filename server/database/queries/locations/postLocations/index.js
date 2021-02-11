const connection = require('../../../data/connection');

const postLocationsQuery = (subLocation, mainLocation) => {
  const sql = {
    text:
      'INSERT INTO locations(location_sub,location_main) VALUES ($1, $2) RETURNING(location_sub,location_main)',
    values: [subLocation, mainLocation],
  };
  return connection.query(sql);
};

module.exports = postLocationsQuery;
