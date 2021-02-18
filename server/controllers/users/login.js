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

    const {
      rows: [user],
    } = await checkEmail({ email });

    if (user) {
      const { id: userId, password: userPassword, is_admin: isAdmin } = user;
      const isPassword = await compare(password, userPassword);

      if (isPassword) {
        const token = await sign({ userId, isAdmin });
        res
          .cookie('token', token, { httpOnly: true })
          .json({ statusCode: 200, message: 'logged in successfully' });
      } else {
        next(boomify(400, 'Login Error', 'Incorrect email or password.'));
      }
    } else {
      next(boomify(400, 'Login Error', 'Incorrect email or password.'));
    }
  } catch (error) {
    next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = login;
