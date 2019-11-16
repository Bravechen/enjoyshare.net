const createError = require('http-errors');

// catch 404 and forward to error handler
function err404(req, res, next) {
  next(createError(404));
}

// error handler
function err500(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
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
  app.use(err500);
  appDebug('set error handler');
  return {};
}

module.exports = {
  handleErrs
};
