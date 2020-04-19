const express = require('express');
const router = express.Router();
const managePage = require('../models/manage/manage');

router.get('/', function(req, res, next) {
  res.render('./pages/manage/manage', Object.assign({}, managePage, {}));
});

router.get('/createArticle', function(req, res, next) {
  res.render('./pages/manage/createArticle', {
    title: '创建文章'
  });
});

router.get('/articles', function(req, res, next) {
  res.render('./pages/manage/manageArts', {
    title: '管理文章'
  });
});

router.get('/edit/:id', function(req, res, next) {
  res.render('./pages/manage/editArt', {
    title: '编辑文章'
  });
});

module.exports = router;
