const connection = require('../../data/connection');

const getKindergartenSearch = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getKindergartenSearch;
