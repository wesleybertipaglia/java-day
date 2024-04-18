import gulp from 'gulp'
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin'
import webp from 'gulp-webp'

const { src, dest, watch, series } = gulp

function optimizeImgs() {
  return src('public/imgs/**/*.{jpg,jpeg,png}')
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
      ])
    )
    .pipe(dest('dist/images'))
}

function convertToWebp() {
  return src('dist/images/**/*.{jpg,jpeg,png}').pipe(webp()).pipe(dest('dist/images'))
}

function watchTask() {
  watch('public/imgs/**/*.{jpg,jpeg,png}', series(optimizeImgs, convertToWebp));
}

export default series(
  optimizeImgs,
  convertToWebp,
  watchTask
)
