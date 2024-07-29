import gulp from 'gulp'
import terser from 'gulp-terser'
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin'
import webp from 'gulp-webp'
import { deleteAsync } from 'del'

const { src, dest, watch, series } = gulp

function jsMinify() {
  return src('src/scripts/*.js').pipe(terser()).pipe(dest('dist/scripts/'))
}

function optimizeImgs() {
  return src('public/imgs/**/*.{jpg,jpeg,png}')
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
      ])
    )
    .pipe(dest('public/imgs'))
}

function convertToWebp() {
  return src('public/imgs/**/*.{jpg,jpeg,png}').pipe(webp()).pipe(dest('public/imgs/'))
}

function cleanImgs() {
  return deleteAsync(['public/imgs/**/*.{jpg,jpeg,png}', '!public/imgs/**/*.webp'])
}

function watchTask() {
  watch('src/scripts/*.js', jsMinify);
  watch('public/imgs/**/*.{jpg,jpeg,png}', series(optimizeImgs, convertToWebp))
}

export default series(
  jsMinify,
  optimizeImgs,
  convertToWebp,
  cleanImgs,
  watchTask
)
