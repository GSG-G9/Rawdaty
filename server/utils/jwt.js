const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env;

const sign = (data) =>
  new Promise((resolve, reject) => {
    jwt.sign(data, SECRET_TOKEN, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });

const verify = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });

module.exports = { sign, verify };
