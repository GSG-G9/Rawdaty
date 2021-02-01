const { boomify } = require('../../utils');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  const errorMessage = err.statusCode
    ? err
    : boomify(500, 'Internal Server Error', 'Something went wrong');

  res.status(err.statusCode || 500).json(errorMessage);
};

module.exports = serverError;
