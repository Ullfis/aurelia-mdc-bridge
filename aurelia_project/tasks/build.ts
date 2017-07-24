// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import { CLIOptions, build as buildCLI } from 'aurelia-cli';
import transpile from './transpile';
import processMarkup from './process-markup';
import processPug from './process-pug';
import processIndexPug from './process-pug-index';
import processCSS from './process-css';
import copyFiles from './copy-files';
import watch from './watch';

const build = gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processIndexPug,
    processMarkup,
    processPug,
    processCSS,
    copyFiles
  ),
  writeBundles
);

let main;

if (CLIOptions.taskName() === 'build' && CLIOptions.hasFlag('watch')) {
  main = gulp.series(
    build,
    (done) => { watch(); done(); }
  );
} else {
  main = build;
}

function readProjectConfiguration() {
  return buildCLI.src(project);
}

function writeBundles() {
  return buildCLI.dest();
}

export { main as default };
