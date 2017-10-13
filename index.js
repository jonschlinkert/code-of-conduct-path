'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('matched');

module.exports = function(cwd) {
  var patterns = [
    '**/coc{,.md}',
    '**/code-of-conduct{,.md}',
    '**/code_of_conduct{,.md}',
    '**/contributor{-,_}covenent{,.md}'
  ];

  if (cwd == null) cwd = process.cwd();
  const opts = {cwd: cwd, nocase: true, ignore: ['**/node_modules/**']};
  var files = glob.sync(patterns, opts);
  for (let file of files) {
    var fp = path.resolve(opts.cwd, file);
    if (fs.statSync(fp).isFile()) {
      return fp;
    }
  }
};
