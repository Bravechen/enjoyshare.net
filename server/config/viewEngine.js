/**
 * @internal
 * @description 设置模板引擎
 * @param {*} param0 
 */
function setViewEngine({ app, appDebug, viewsDir, viewEngine }) {
  // view engine setup
  app.set('views', viewsDir);
  app.set('view engine', viewEngine.engine);
  app.set('view options', {
    layout: viewEngine.defaultLayout
  });

  for(let settingFn of (viewEngine.settings || [])) {
    if (typeof settingFn !== 'function') {
      continue;
    }
    settingFn(viewsDir, viewEngine);
  }
  
  appDebug('set view engine', viewEngine.engine);
  return {};
};

module.exports = { setViewEngine };