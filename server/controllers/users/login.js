const { compare } = require('bcrypt');
const { sign } = require('../../utils/jwt');
const boomify = require('../../utils/boomify');
const { checkEmail } = require('../../database/queries');
const loginSchema = require('../../utils/validation/loginSchema');

const login = async (req, res, next) => {
  try {
    const { email, password } = await loginSchema.validate(req.body, {
      abortEarly: false,
    });

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
    return res
      .cookie('token', token, { httpOnly: true })
      .json({ statusCode: 200, message: 'logged in successfully' });
  } catch (error) {
    return next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = login;
