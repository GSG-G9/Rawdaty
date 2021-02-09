const getKindergarten = require('../database/queries/index');

module.exports.getKindergarten = (req, res, next) => {
  getKindergarten()
    .then(({ rows }) => {
      res.json({ data: rows, msg: 'success', status: 200 });
    })
    .catch(next);
};
