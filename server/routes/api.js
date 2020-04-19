const express = require('express');

const router = express.Router();

const articles = require('./api/articles');

router.use('/articles', articles);

module.exports = router;
