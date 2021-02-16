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
      if (error.name === 'JsonWebTokenError') {
        res.clearCookie('token');
        next(boomify(401, 'Unauthorized Error', 'Unauthorized User'));
      } else {
        next(error);
      }
    }
  } else {
    next(boomify(401, 'Unauthorized Error', 'Unauthorized User'));
  }
};

module.exports = verifyUser;
