const connection = require('../../../data/connection');

const postLocationsQuery = (id, subLocation, mainLocation) => {
  const sql = {
    text:
      'INSERT INTO locations(id,location_sub,location_main) VALUES ($1, $2, $3) RETURNING *',
    values: [id, subLocation, mainLocation],
  };
  return connection.query(sql);
};

module.exports = postLocationsQuery;
