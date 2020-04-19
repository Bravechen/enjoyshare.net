const express = require('express');
const router = express.Router();
const articlesPage = require('../models/articles/articles');
const articlePage = require('../models/articles/article');

router.get('/', function(req, res, next) {
  res.render(
    './pages/articles/articles',
    Object.assign({}, articlesPage, {})
  );
});

router.get('/:id', function(req, res, next) {
  res.render(
    './pages/articles/article',
    Object.assign({}, articlePage, {})
  );
});

module.exports = router;
