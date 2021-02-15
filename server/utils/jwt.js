const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env;

const sign = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_TOKEN, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  });

const verify = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });

module.exports = { sign, verify };
