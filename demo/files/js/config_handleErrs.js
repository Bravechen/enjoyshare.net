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
const createError = require('http-errors');
//============================================================
// 错误页面模板地址
const errTemplate = {
  [404]: './pages/err4x',
  [500]: './pages/err5x',
  default: './pages/error'
};

// catch 404 and forward to error handler
function err404(req, res, next) {
  next(createError(404));
}

// error handler
function errDefault(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  let errStatus = err.status || 500;
  res.status(errStatus);
  res.render(errTemplate[errStatus] || errTemplate.default);
}

/**
* @internal
* @description 处理错误
* @param {*} param0
*/
function handleErrs({ app, appDebug }) {
  // catch 404 and forward to error handler
  app.use(err404);

  // error handler
  app.use(errDefault);
  appDebug('set error handler');
  return {};
}
//============================================================
module.exports = {
  handleErrs
};
`;
};
