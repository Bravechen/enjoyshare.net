module.exports = function({
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
/**
 * @internal
 * @description 设置模板引擎
 * @param {any}
 * @returns {any}
 */
function setViewEngine({ app, appDebug, viewsDir, viewEngine }) {
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
    settingFn(viewsDir, viewEngine);
  }

  appDebug('set view engine', viewEngine.engine);
  return {};
};
//============================================================
module.exports = { setViewEngine };
`;
};
