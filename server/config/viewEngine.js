/**
 * @internal
 * @description 设置模板引擎
 * @param {*} param0 
 */
function setViewEngine({ app, appDebug, viewsDir }) {
  // view engine setup
  app.set('views', viewsDir);
  app.set('view engine', 'hbs');
  
  appDebug('set view engine', 'hbs');
  return {};
};

module.exports = { setViewEngine };