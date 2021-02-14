const router = require('express').Router();
const { getComments, addComments } = require('../controllers');

router.get('/kindergarten/:kindergartenId/comments', getComments);
router.post('/kindergarten/:kindergartenId/comments', addComments);

module.exports = router;
