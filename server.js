/* eslint-disable */

var fs = require('fs');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

var yargs = require('yargs');

var serverPort = process.env.PORT || 3000;

if (!yargs.argv._) {
  process.stderr.write('Please, provide argument');
  process.exit(1);
}

const [entryPath, ..._] = yargs.argv._;

const aliasPath = path.join(__dirname, entryPath);

if (!fs.existsSync(aliasPath)) {
  process.stderr.write("Path doesn't exists");
  process.exit(1);
}

if (!config.resolve) {
  config.resolve = {};
}

config.resolve.alias = {
  CurrentPresentation: aliasPath
};

var compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + serverPort);
});
