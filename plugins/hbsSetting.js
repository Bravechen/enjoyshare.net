/**
 * @description 用于对hbs进行设置
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
const hbs = require('hbs');
const path = require('path');
//============================================================
/**
 * @private
 * @description 注册partials文件目录
 * @param {any}
 */
function registerPartials({ viewEngine, projectRoot }) {
  for (let dir of (viewEngine.partials || [])) {
    hbs.registerPartials(path.join(projectRoot, dir));
  }
}

/**
 * @private
 * @description 注册secton helper，用于在模板中嵌入脚本和样式等片段
 * @param {any}
 */
function registerSectionHelper() {
  hbs.registerHelper('section', function(name, options) {
    if (!this._sections) {
      this._sections = {};
    }
    this._sections[name] = options.fn(this);
    return null;
  });
}
//============================================================
/**
 * @public
 * @description 用于对hbs进行设置
 * @param {string} viewsDir [required] 视图目录
 * @param {any} viewEngine [required] 视图引擎设置
 */
module.exports = function(viewsDir, viewEngine, projectRoot) {
  [
    registerPartials,
    registerSectionHelper
  ].reduce(function(prev, item) {
    return Object.assign({}, prev, item(prev) || {});
  }, {
    viewsDir,
    viewEngine,
    projectRoot,
  });
}
