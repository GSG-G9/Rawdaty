const { default: axios } = require('axios');
const { getKindergarten } = require('../../database/queries');

const getKinderGarten = async (req, res, next) => {
  try {
    const result = await axios.get(getKindergarten);
    const { data } = result;
    res.json(data);
  } catch (error) {
    next(error);
  }
};
module.exports = { getKinderGarten };
