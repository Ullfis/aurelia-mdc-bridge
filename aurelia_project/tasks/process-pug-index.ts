// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as htmlmin from 'gulp-htmlmin';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as pug from 'gulp-pug';
import * as changedInPlace from 'gulp-changed-in-place';
import { build } from 'aurelia-cli';

export default function processIndexPug() {
  return gulp.src('./index.pug')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('.'));
}
