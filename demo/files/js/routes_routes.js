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
const indexRouter = require('./index');
//============================================================
/**
 * @internal
 * @description 设置路由
 * @param {*} param0
 */
function setRoutes({ app, appDebug }) {
  app.use('/', indexRouter);


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
`;
};
