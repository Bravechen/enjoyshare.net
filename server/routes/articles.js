const express = require('express');
const router = express.Router();
const articlesPage = require('../models/articles/articles');
const articlePage = require('../models/articles/article');
const artService = require('../services/AritcleService');

// 获取文章列表
router.get('/', function(req, res, next) {
  artService.all()
    .then(data => {
      res.render(
        './pages/articles/articles',
        Object.assign({}, articlesPage, { articles: data })
      );
    })
    .catch(err => {
      res.render(
        './pages/errors/err5x',
        {
          message: '获取数据失败',
          error: err
        }
      );
    });

});

// 获取文章内容
router.get('/:id', function(req, res, next) {
  const params = req.params;
  const id = +params.id;
  artService.find(id)
    .then(data => {
      res.render(
        './pages/articles/article',
        Object.assign({}, articlePage, data)
      );
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
