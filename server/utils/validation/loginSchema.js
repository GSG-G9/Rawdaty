const { object, string } = require('yup');

const loginSchema = object({
  email: string().email().required('No email provided.'),
  password: string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

module.exports = loginSchema;
