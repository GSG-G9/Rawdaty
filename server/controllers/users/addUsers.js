const { hash } = require('bcrypt');
const { sign } = require('../../utils/jwt');
const { addUsersQuery, checkEmail } = require('../../database/queries');
const { boomify } = require('../../utils');
const { addUserSchema } = require('../../utils/validation');

const addUsers = async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;
    await addUserSchema.validate(
      { userName, email, password, confirmPassword },

      {
        abortEarly: false,
      }
    );
    const { rows: user } = await checkEmail({ email });
    if (user[0]) {
      next(boomify(401, 'Login Error', 'You are registered'));
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addUsersQuery(userName, email, hashedPassword);
    const token = sign({ userId: data[0].id });
    res
      .cookie('token', token, { httpOnly: true })
      .status(201)
      .json({ statusCode: 201, message: 'registered successfully', data });
  } catch (error) {
    next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = addUsers;
