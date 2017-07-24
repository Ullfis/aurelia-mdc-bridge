// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';
import * as historyApiFallback from 'connect-history-api-fallback/lib';
import { CLIOptions } from 'aurelia-cli';
import build from './build';
import watch from './watch';

const serve = gulp.series(
  build,
  done => {
    browserSync({
      online: false,
      open: false,
      port: 9000,
      logLevel: 'silent',
      server: {
        baseDir: [project.platform.baseDir],
        middleware: [historyApiFallback(), (req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }]
      }
    }, (err, bs) => {
      if (err) { return done(err); }
      const urls = bs.options.get('urls').toJS();
      log(`Application Available At: ${urls.local}`);
      log(`BrowserSync Available At: ${urls.ui}`);
      done();
    });
  }
);

function log(message) {
  // tslint:disable-next-line:no-console
  console.log(message);
}

function reload() {
  log('Refreshing the browser');
  browserSync.reload();
}

let run;

if (CLIOptions.hasFlag('watch')) {
  run = gulp.series(
    serve,
    done => { watch(reload); done(); }
  );
} else {
  run = serve;
}

export default run;
