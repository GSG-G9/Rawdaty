const { verify } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');

const protectedAdmin = async (req, res, next) => {
  const { token } = req.cookies;

  try {
    const { isAdmin } = await verify(token);
    if (isAdmin === 'true') {
      next();
    } else {
      next(
        boomify(401, 'Unauthorized Error', "Unauthenticated, your aren't admin")
      );
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      res.clearCookie('token');
      next(boomify(401, 'Unauthorized Error', 'Unauthorized User'));
    } else {
      next(error);
    }
  }
};

module.exports = protectedAdmin;
