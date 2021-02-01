const { boomify } = require('../../utils');

const clientError = (req, res) => {
  const errorMessage = boomify(404, 'Not Found', 'The page is not found');
  res.status(404).json(errorMessage);
};

module.exports = clientError;
