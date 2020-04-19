/**
 * @description 路由配置
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
const indexRouter = require('./index');
const api = require('./api');
const articles = require('./articles');
const manage = require('./manage');
//============================================================
/**
 * @internal
 * @description 设置路由
 * @param {*} param0
 */
function setRoutes({ app, appDebug }) {

  // 首页
  app.use('/', indexRouter);
  app.use('/home', indexRouter);

  // 文章页
  app.use('/articles', articles);
  // 管理页
  app.use('/manage', manage);

  // api
  app.use('/api', api);

  appDebug('set routers');
  return {};
}

/**
 * @internal
 * @description 设置静态目录和路由
 * @param {*} param0
 */
function setStatic({ app, express, appDebug, staticDirs }) {

  let list = staticDirs.map(function(item, index) {
    // default static
    if (typeof item === 'string') {
      app.use(express.static(item));
      return item;
    }

    if (typeof item === 'object' && item !== null && !!item.route) {
      app.use(item.route, express.static(item.dir));
      return item.route;
    }
    return false;
  });
  appDebug('set server static route and dir', list);
  return {};
}
//============================================================
module.exports = { setRoutes, setStatic };
