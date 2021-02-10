const router = require('express').Router();

const { getComments } = require('../controllers');

router.get('/kindergarten/:kindergartenId/comments', getComments);

module.exports = router;
