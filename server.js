/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const chalk = require('chalk');

const app = express();

const yargs = require('yargs');

const serverPort = process.env.PORT || 3000;

if (yargs.argv._.length !== 1) {
  process.stderr.write(chalk.red('ERROR: Please, provide one argument\n'));
  process.exit(1);
}

const [entryPath] = yargs.argv._;

const aliasPath = path.join(__dirname, entryPath);

if (!fs.existsSync(aliasPath)) {
  process.stderr.write(chalk.red(`ERROR: Folder "${chalk.bold(entryPath)}" doesn't exists\n`));
  process.exit(1);
}

config.entry.push(`./${entryPath}/index.js`);

const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${serverPort}`);
});
