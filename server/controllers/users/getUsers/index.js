const { getUsersQuery } = require('../../../database/queries');

const getUsers = async (req, res, next) => {
  try {
    const { rows: data } = await getUsersQuery();
    res.status(200).json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = getUsers;
