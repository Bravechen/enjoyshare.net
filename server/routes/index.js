/**
 * @description 默认根路由
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
const express = require('express');
const router = express.Router();
//============================================================
// get home页
router.get('/', function(req, res, next) {

  res.render('./pages/index', { title: 'Express' });
});
//============================================================
module.exports = router;
