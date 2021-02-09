const { getAllUsers } = require('../../../database/queries');

const getUsers = async (req, res, next) => {
  try {
    const { rows } = await getAllUsers();
    res.status(200).json({ statusCode: 200, rows });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers };
