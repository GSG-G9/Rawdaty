const { verify } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');

const verifyUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const { decoded } = await verify(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.clearCookie('token');
      res.status(401).json(boomify(401, 'unauthorized', 'unauthorized'));
    }
  } else {
    res.status(401).json(boomify(401, 'unauthorized', 'unauthorized'));
  }
};

module.exports = verifyUser;
