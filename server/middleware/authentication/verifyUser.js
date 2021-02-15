const { verify } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');

const verifyUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const { userId } = await verify(token);
      req.userId = userId;
      next();
    } catch (error) {
      res.clearCookie('token');
      next(boomify(401, 'Unauthorized Error', 'unauthorized User'));
    }
  } else {
    next(boomify(401, 'Unauthorized Error', 'unauthorized User'));
  }
};

module.exports = verifyUser;
