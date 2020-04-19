/**
 * @description 模板引擎配置
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
/**
 * @internal
 * @description 设置模板引擎
 * @param {any}
 * @returns {any}
 */
function setViewEngine({ app, appDebug, viewsDir, viewEngine, projectRoot }) {
  // view engine setup
  app.set('views', viewsDir);
  app.set('view engine', viewEngine.engine);
  app.set('view options', {
    layout: viewEngine.defaultLayout
  });

  // view engine plugins setting
  for(let settingFn of (viewEngine.settings || [])) {
    if (typeof settingFn !== 'function') {
      continue;
    }
    settingFn(viewsDir, viewEngine, projectRoot);
  }

  appDebug('set view engine', viewEngine.engine);
  return {};
};
//============================================================
module.exports = { setViewEngine };
