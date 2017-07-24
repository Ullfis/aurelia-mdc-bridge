// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
// tslint:disable-next-line:no-var-requires
const autoprefix = require('gulp-autoprefixer');
import * as gulp from 'gulp';
import * as path from 'path';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as pug from 'gulp-pug';
import * as sass from 'gulp-sass';
import { build } from 'aurelia-cli';

const SASS_INCLUDE_PATHS = [
  path.resolve('node_modules')
];

// https://github.com/ai/browserslist#queries
const AUTOPREFIXER_BROWSERS = {
  browsers: [
    'last 2 version',
    'not ie <= 8'
  ],
  cascade: false
};

function buildPug() {
  return gulp.src('src/bridge/**/*.pug')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/amd/'))
    .pipe(gulp.dest('dist/commonjs/'))
    .pipe(gulp.dest('dist/es2015/'))
    .pipe(gulp.dest('dist/es2017/'))
    .pipe(gulp.dest('dist/native-modules/'))
    .pipe(gulp.dest('dist/system/'));
}

function buildScss() {
  return gulp.src('src/bridge/**/*.scss')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: SASS_INCLUDE_PATHS
    }).on('error', sass.logError))
    .pipe(autoprefix(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('dist/amd/'))
    .pipe(gulp.dest('dist/commonjs/'))
    .pipe(gulp.dest('dist/es2015/'))
    .pipe(gulp.dest('dist/es2017/'))
    .pipe(gulp.dest('dist/native-modules/'))
    .pipe(gulp.dest('dist/system/'));
}

function copyFiles() {
  return gulp.src('src/bridge/**/*.{html,css,json,js}')
    .pipe(plumber({ errorHandler: notify['onError']('Error: <%= error.message %>') }))
    .pipe(gulp.dest('dist/amd/'))
    .pipe(gulp.dest('dist/commonjs/'))
    .pipe(gulp.dest('dist/es2015/'))
    .pipe(gulp.dest('dist/es2017/'))
    .pipe(gulp.dest('dist/native-modules/'))
    .pipe(gulp.dest('dist/system/'));
}

export default gulp.series(
  copyFiles,
  buildPug,
  buildScss
);
