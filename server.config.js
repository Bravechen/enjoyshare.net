const path = require('path');
const hbsSettings = require('./plugins/hbsSetting');
const projectRoot = process.cwd();
const serverConfig = {
  port: process.env.PORT || '3000',
  viewsDir: path.join(projectRoot, './web/views'),
  staticDirs: [{ route: '/static', dir: path.join(projectRoot, './web/static') }],
  viewEngine: {
    engine: 'hbs',
    defaultLayout: './layouts/layout',
    partials: [
      path.join(projectRoot, './web/views/components'), 
      path.join(projectRoot, './web/views/templates')
    ],
    settings: [hbsSettings]
  }
};

module.exports = serverConfig;