const { verify } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');

const verifyUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const { decoded } = await verify(token);
      req.userId = decoded;
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
