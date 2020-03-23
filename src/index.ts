#!/usr/bin/env node

import { loadConfig } from './config';
// tslint:disable-next-line: no-var-requires
const deglob = require('deglob');
// tslint:disable-next-line: no-var-requires
const gutil = require('gulp-util');

export const ModuleName = 'open-filename-check';

const config = loadConfig();
deglob(config.patterns, config.options, (err: any, files: string[]) => {
  if (err) {
    gutil.log(ModuleName, gutil.colors.red(err));
    process.exit(-1);
  }
  doCheck(files);
});

function doCheck(files: string[]) {
  const baseLen = process.cwd().length;
  files.forEach(filePath => {
    const relativePath = filePath.substr(baseLen + 1, filePath.length - baseLen);
    if (relativePath.toLowerCase() !== relativePath) {
      gutil.log(ModuleName, gutil.colors.red(`${relativePath} contains uppercase characters`));
      process.exitCode = -1;
    }
  });
}
