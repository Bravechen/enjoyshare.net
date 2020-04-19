const express = require('express');
const router = express.Router();
const artService = require('../../services/AritcleService');

// 获取文章列表
router.get('/', function(req, res, next) {
  artService.all()
    .then(data => {
      res.status(200).json({ resCode: 200, list: data });
    })
    .catch(err => {
      console.error(err);
      res.status(200).json({ resCode: 500, err });
    });
});

// 获取某篇文章
router.get('/:id', function (req, res, next) {
  let params = req.params;
  let id = params.id;
  artService.find(id)
    .then(data => {
      res.status(200).json({ resCode: 200, article: data });
    })
    .catch(err => {
      console.error(err);
      res.status(200).json({ resCode: 500, err });
    });
});

// 创建文章
router.post('/', function (req, res, next) {
  const body = req.body || {};
  artService.create({
    title: body.title,
    content: body.desc,
    link: body.link
  })
    .then( data => {
      res.status(200).json({ resCode: 200 });
    })
    .catch( err => {
      console.log(err);
      res.status(200).json({ resCode: 500, err });
    });
});

// 删除文章
router.delete('/:id', function (req, res, next) {
  const params = req.params;
  const id = params.id;
  artService.deleteArt(id)
    .then(data => {
      res.status(200).json({ resCode: 200 });
    })
    .catch(err => {
      console.error(err);
      res.status(200).json({ resCode: 500 });
    });
});

router.put('/:id', function (req, res, next) {
  const params = req.params;
  const id = params.id;
  const body = req.body;
  console.log('update article:', id, body);
  res.status(200).json({ resCode: 200 });
});

module.exports = router;
