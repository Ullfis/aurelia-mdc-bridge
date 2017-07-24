// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as minimatch from 'minimatch';
import * as gulpWatch from 'gulp-watch';
import * as debounce from 'debounce';
import { build } from 'aurelia-cli';
import transpile from './transpile';
import processMarkup from './process-markup';
import processPug from './process-pug';
import processCSS from './process-css';
import copyFiles from './copy-files';

const debounceWaitTime = 100;
let isBuilding = false;
const pendingRefreshPaths = [];
const watches = {};
let watchCallback = () => { /** nothing */ };

watches[project.transpiler.source] = { name: 'transpile', callback: transpile };
watches[project.markupProcessor.source] = { name: 'markup', callback: processMarkup };
watches[project.markupPug.source] = { name: 'pugmarkup', callback: processPug };
watches[project.cssProcessor.source] = { name: 'CSS', callback: processCSS };
if (typeof project.build.copyFiles === 'object') {
  for (const src of Object.keys(project.build.copyFiles)) {
    watches[src] = { name: 'file copy', callback: copyFiles };
  }
}

const watch = (callback?) => {
  watchCallback = callback || watchCallback;
  return gulpWatch(
    Object.keys(watches),
    {
      read: false, // performance optimization: do not read actual file contents
      verbose: true
    },
    (vinyl) => {
      if (vinyl.path && vinyl.cwd && vinyl.path.startsWith(vinyl.cwd)) {
        const pathToAdd = vinyl.path.substr(vinyl.cwd.length + 1);
        log(`Watcher: Adding path ${pathToAdd} to pending build changes...`);
        pendingRefreshPaths.push(pathToAdd);
        refresh();
      }
    });
};

const refresh = debounce(() => {
  if (isBuilding) {
    log('Watcher: A build is already in progress, deferring change detection...');
    return;
  }

  isBuilding = true;

  const paths = pendingRefreshPaths.splice(0);
  const refreshTasks = [];

  // Dynamically compose tasks
  for (const src of Object.keys(watches)) {
    if (paths.find((x) => minimatch(x, src))) {
      log(`Watcher: Adding ${watches[src].name} task to next build...`);
      refreshTasks.push(watches[src].callback);
    }
  }

  if (refreshTasks.length === 0) {
    log('Watcher: No relevant changes found, skipping next build.');
    isBuilding = false;
    return;
  }

  const toExecute = gulp.series(
    readProjectConfiguration,
    gulp.parallel(refreshTasks),
    writeBundles,
    (done) => {
      isBuilding = false;
      watchCallback();
      done();
      if (pendingRefreshPaths.length > 0) {
        log('Watcher: Found more pending changes after finishing build, triggering next one...');
        refresh();
      }
    }
  );

  toExecute();
}, debounceWaitTime);

function log(message: string) {
  // tslint:disable-next-line:no-console
  console.log(message);
}

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}

export default watch;
