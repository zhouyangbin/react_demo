'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.STATIC_ENV = 'development';

require('../config/env');

const fs = require('fs');
//const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  createCompiler
} = require('react-dev-utils/WebpackDevServerUtils');

const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}
const port =  3070;
const HOST = process.env.HOST || '0.0.0.0';
const protocol = 'http';
const urls = 'localhost:'+port;
const compiler = createCompiler(webpack, config, urls, useYarn);
const serverConfig = createDevServerConfig(urls);
const devServer = new WebpackDevServer(compiler, serverConfig);
devServer.listen(port, HOST, err => {
	console.log(port);
	console.log(err);
   openBrowser(urls);
});
