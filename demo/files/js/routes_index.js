module.exports = function ({
  description,
  author,
  date,
  version
}) {
  return `
/**
* @description ${description}
* @author ${author} on ${date}
* @version ${version}
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
`;
};
