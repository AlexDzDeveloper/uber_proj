const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task("styles", function() {
  return gulp.src("src/sass/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//компілюємо код, шлях до якого вказали вище. Зжатий стиль коду
    .pipe(rename({
      prefix: "",
      suffix: ".min",
    }))//переіменовуємо наш файл, який компілюється. буде не style.css, a style.min.css
    .pipe(autoprefixer({
			cascade: false
		}))//автопрефікс для будь-якого браузера
    .pipe(cleanCSS({compatibility: 'ie8'}))//очищуємо файл
    .pipe(gulp.dest("src/css"))//вказуємо шлях, куди буде компілюватися код css
    .pipe(browserSync.stream());//обновляємо сторінку при компіляції
})

gulp.task("watch", function() {
  gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"))//при зміні вмісту файлів виконується запуск задачі styles, яка в свою чергу після виконання обновить браузер
  gulp.watch("src/*.html").on("change", browserSync.reload)//відстежуємо зміни файла html, і виконуємо задачу browserSync.reload
})

gulp.task("default", gulp.parallel("watch", "server", "styles"));//запускаємо паралельно 3 задачі