// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as htmlmin from 'gulp-htmlmin';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as pug from 'gulp-pug';
import * as changedInPlace from 'gulp-changed-in-place';
import { build } from 'aurelia-cli';

export default function processPug() {
  return gulp.src(project.markupPug.source)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(pug())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      ignoreCustomFragments: [/\${.*?}/g] // ignore interpolation expressions
    }))
    .pipe(build.bundle());
}
