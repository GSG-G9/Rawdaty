const { verify } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');

const verifyAdmin = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const { isAdmin } = await verify(token);
      if (isAdmin === 'true') {
        next();
      } else {
        next(
          boomify(
            401,
            'Unauthorized Error',
            "Unauthenticated, your aren't admin"
          )
        );
      }
    } catch (error) {
      next(boomify(401, 'Unauthorized Error', 'unauthorized User'));
    }
  } else {
    next(boomify(401, 'Unauthorized Error', 'unauthorized User'));
  }
};

module.exports = verifyAdmin;
