const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({ statusCode: 200, message: 'logout successfully' });
};

module.exports = logout;
