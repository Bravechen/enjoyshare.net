const express = require('express');
const router = express.Router();
const managePage = require('../models/manage/manage');
const artService = require('../services/AritcleService');

router.get('/', function(req, res, next) {
  res.render('./pages/manage/manage', Object.assign({}, managePage, {}));
});

router.get('/createArticle', function(req, res, next) {
  res.render('./pages/manage/createArticle', {
    title: '创建文章'
  });
});

router.get('/articles', function(req, res, next) {
  artService.all()
    .then(data => {
      res.render('./pages/manage/manageArts', {
        title: '管理文章',
        articles: data
      });
    })
    .catch(err => {
      next(err);
    });
});

router.get('/edit/:id', function(req, res, next) {
  const params = req.params;
  const id = +params.id;
  artService.find(id)
    .then(data => {
      res.render('./pages/manage/editArt', {
        ...data
      });
    })
    .catch(err => {
      next(err);
    });

});

module.exports = router;
