const { getAllUsers } = require('../../../database/queries');

const getUsers = async (req, res, next) => {
  try {
    const { rows } = await getAllUsers();
    console.log(rows);
    res.status(200).json({ statusCode: 200, rows });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

module.exports = { getUsers };
