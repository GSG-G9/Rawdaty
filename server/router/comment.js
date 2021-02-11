const router = require('express').Router();

const { addComments } = require('../controllers');

router.post('/kindergarten/:kindergartenId/comments', addComments);

module.exports = router;
