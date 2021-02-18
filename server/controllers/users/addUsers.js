const { hash } = require('bcrypt');
const { sign } = require('../../utils/jwt');
const { addUsersQuery, checkEmail } = require('../../database/queries');
const { boomify } = require('../../utils');
const { addUserSchema } = require('../../utils/validation');

const addUsers = async (req, res, next) => {
  try {
    const { userName, email, password } = await addUserSchema.validate(
      req.body,

      {
        abortEarly: false,
      }
    );
    const { rows: user } = await checkEmail({ email });
    if (user[0]) {
      return next(boomify(401, 'Login Error', 'You are registered'));
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addUsersQuery(userName, email, hashedPassword);
    const { id: userId, is_admin: isAdmin } = data[0];
    const token = await sign({ userId, isAdmin });
    return res
      .cookie('token', token, { httpOnly: true })
      .status(201)
      .json({ statusCode: 201, message: 'registered successfully', data });
  } catch (error) {
    return next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = addUsers;
