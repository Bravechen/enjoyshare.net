/**
 * @description 中间件设置
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//============================================================
/**
 * @internal
 * @description 设置中间件
 * @param {any}
 * @returns {any}
 */
function setMiddlewares({ app, express, appDebug }) {
  app.use(logger('dev'));

  // express内建中间件。将请求按照JSON解析，来源于body-parser模块
  app.use(express.json());

  // express内建中间件。将请求按照urlencoded解析，来源于body-parser
  app.use(express.urlencoded({ extended: false }));

  // 解析请求中的cookie
  app.use(cookieParser());

  appDebug('set server middlewares');
  return {};
}
//============================================================
module.exports = {
  cookieParser,
  logger,
  setMiddlewares
};
