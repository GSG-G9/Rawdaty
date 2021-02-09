const router = require('express').Router();
const { kindergartenSearch } = require('../controllers');

router.get('/search', kindergartenSearch);

module.exports = router;
