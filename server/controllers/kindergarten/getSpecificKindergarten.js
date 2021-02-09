const { getKindergartenById } = require('../../database/queries/kindergarten');

const getSpecificKindergarten = async (req, res, next) => {
  try {
    const { rows } = await getKindergartenById(req.params.kindergartenId);
    res.status(200).json({
      message: 'success',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getSpecificKindergarten;
