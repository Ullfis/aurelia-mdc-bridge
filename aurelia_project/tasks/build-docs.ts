// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as path from 'path';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as pug from 'gulp-pug';
import * as htmlreplace from 'gulp-html-replace';
import { build } from 'aurelia-cli';

function copyIndex() {
  return gulp.src('index.html')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(htmlreplace({ basereplace: '<base href="/aurelia-mdc-bridge/">'}))
    .pipe(gulp.dest('docs'));
}

function copyFavicon() {
  return gulp.src('favicon.ico')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(gulp.dest('docs'));
}

function copyScripts() {
  return gulp.src('scripts/**/*.{html,css,json,js}')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(gulp.dest('docs/scripts'));
}

function copyImages() {
  return gulp.src('images/**/*.*')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(gulp.dest('docs/images'));
}

function copyStyles() {
  return gulp.src('style/**/*.*')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(gulp.dest('docs/style'));
}

export default gulp.series(
  copyScripts,
  copyIndex,
  copyFavicon,
  copyImages,
  copyStyles
);
