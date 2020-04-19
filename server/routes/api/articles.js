const express = require('express');
const router = express.Router();

// 获取文章列表
router.get('/', function(req, res, next) {
  res.status(200).json({ resCode: 200, list: [] })
});

// 获取某篇文章
router.get('/:id', function (req, res, next) {
  res.status(200).json({ resCode: 200, article: {} });
});

// 创建文章
router.post('/', function (req, res, next) {
  res.status(200).json({ resCode: 200 });
});

// 删除文章
router.delete('/:id', function (req, res, next) {
  res.status(200).json({ resCode: 200 });
});

module.exports = router;
