const { object, string, ref } = require('yup');

const addUserSchema = object({
  userName: string().min(5).required(),
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(),
});

module.exports = addUserSchema;
