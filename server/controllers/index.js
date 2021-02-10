const { clientError, serverError } = require('./errorHandle');
const {
  getSpecificKindergarten,
  kindergartenSearch,
} = require('./kindergarten');

module.exports = {
  clientError,
  serverError,
  getSpecificKindergarten,
  kindergartenSearch,
};
