const {
  getUserInfoById,
  getKindergartensByUserId,
} = require('../../database/queries');

const getAuthUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const {
      rows: [userData],
    } = await getUserInfoById(userId);

    const { rows: kindergartensData } = await getKindergartensByUserId(userId);

    res.json({ statusCode: 200, data: { ...userData, kindergartensData } });
  } catch (err) {
    next(err);
  }
};

module.exports = getAuthUser;
