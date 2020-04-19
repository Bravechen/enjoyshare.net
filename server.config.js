const path = require('path');
const hbsSettings = require('./plugins/hbsSetting');
const projectRoot = process.cwd();

const serverConfig = {
  // 启动端口
  port: process.env.PORT || '3000',
  // 项目根目录
  projectRoot,
  // 模板所在目录
  viewsDir: path.join(projectRoot, './web/views'),
  // 静态文件目录
  staticDirs: [{ route: '/static', dir: path.join(projectRoot, './web/static') }],
  // 模板引擎设置
  viewEngine: {
    // 引擎
    engine: 'hbs',
    // 默认布局模板
    defaultLayout: './layouts/layout',
    // 部件目录
    partials: [
      './web/views/components',
      './web/views/templates',
      './web/views/pages/articles/components',
      './web/views/pages/manage/components'
    ],
    // 插件
    settings: [hbsSettings]
  }
};

module.exports = serverConfig;
