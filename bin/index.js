#!/usr/bin/env node

/**
 * @description enjoyshare.net
 * @author Brave Chan on 2019.11
 * @version 0.0.0
 */
//============================================================
const app = require('../server/app.js');
const http = require('http');
const debug = require('debug');
const path = require('path');
const serverConfig = require(path.relative(__dirname, `${process.cwd()}/server.config.js`));
//============================================================
const serverDebug = debug('server');
const errDebug = debug('error');
//===util=========================================================
/**
 * @private
 * @description Normalize a port into a number, string, or false.
 * @param {string|number} val 
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
//============================================================
/**
 * @private
 * @description 设置端口号
 * @param {*} param0 
 */
function setPort({ app, port }) {
  serverDebug('set port', port);
  app.set('port', port);
  return {};
}

/**
 * @private
 * @description 创建并启动服务器
 * @param {*} param0 
 */
function createServer({ app, port }) {
  const server = http.createServer(app);
  server.listen(port);
  serverDebug('create and setup the server');
  return {
    server: server
  };
}
/**
 * @private
 * @description 添加服务器事件
 * @param {*} param0 
 */
function addServerEvents({ server }) {
  serverDebug('add server events');
  server.on('error', onError);
  server.on('listening', onListerning);
  return {};
}

//============================================================
// init & setup
serverDebug('init & setup');
const { server } = [
  setPort,
  createServer,
  addServerEvents
].reduce(
  function(prev, item) {
    return Object.assign({}, prev, item(prev) || {});
  }, 
  {
    app,
    port: normalizePort(serverConfig.port || 3000)
  }
);
//============================================================
/**
 * @private
 * @description 错误事件
 * @param {*} err 
 */
function onError(err) {
  errDebug('happer error', err);
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      errDebug(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      errDebug(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * @private
 * @description 启动并监听到端口事件
 */
function onListerning() {
  const addr = server.address();
  const port = typeof addr === 'string'
  ? addr
  : addr.port;
  const bind = typeof addr === 'string'
  ? `pipe ${port}`
  : `port ${port}`;
  const address = `http://127.0.0.1:${port}`;
  serverDebug(`Listening on ${bind}`);
  console.log(`Please copy the address and open browser to visit:  ${address}`);
}
//============================================================

module.exports = {};