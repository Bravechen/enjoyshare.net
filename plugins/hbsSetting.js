const hbs = require('hbs');

function registerPartials({ viewEngine }) {
  for (let dir of (viewEngine.partials || [])) {
    hbs.registerPartials(dir);
  }  
}

function registerSectionHelper() {
  hbs.registerHelper('section', function(name, options) {
    if (!this._sections) {
      this._sections = {};
    }
    this._sections[name] = options.fn(this);
    return null;
  });
}

module.exports = function(viewsDir, viewEngine) {
  [
    registerPartials,
    registerSectionHelper
  ].reduce(function(prev, item) {
    return Object.assign({}, prev, item(prev) || {});
  }, {
    viewsDir,
    viewEngine
  });
}
