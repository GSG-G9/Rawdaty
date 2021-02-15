const { compare } = require('bcrypt');
const { sign } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');
const { checkEmail } = require('../../database/queries');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { rows: user } = await checkEmail({ email });
    if (!user[0]) {
      return next(boomify(400, 'Login Error', 'Bad Request'));
    }

    const { id: userId, password: userPassword } = user[0];

    const isPassword = await compare(password, userPassword);
    if (!isPassword) {
      return next(boomify(400, 'Login Error', 'Bad Request'));
    }

    const token = await sign({ userId });
    res.cookie('token', token, { httpOnly: true });

    return res.json({ statusCode: 200, message: 'logged in successfully' });
  } catch (err) {
    return next(err);
  }
};

module.exports = login;
