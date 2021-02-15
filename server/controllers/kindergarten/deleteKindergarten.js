const { deleteKindergartenQuery } = require('../../database/queries');
const { kindergartenIdSchema } = require('../../utils/validation');
const { boomify } = require('../../utils');

const getKindergarten = async (req, res, next) => {
  try {
    const { kindergartenId } = await kindergartenIdSchema.validate(req.params, {
      abortEarly: false,
    });
    const { rows } = await deleteKindergartenQuery(kindergartenId);
    if (rows.length !== 0) {
      res.json({ statusCode: 200, msg: 'kindergarten was deleted' });
    } else {
      next(
        boomify(404, 'Deleted error', 'There is no kindergarten with this id')
      );
    }
  } catch (error) {
    next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};
module.exports = getKindergarten;
