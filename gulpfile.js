var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn"),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    stylus = require("gulp-stylus"),
    ts = require('gulp-typescript'),
    concat = require('gulp-concat');

//***********************************//
// 1.Локальный сервер и автообновление //
//***********************************//

// Запуск локального сервера
gulp.task('connect', function(){
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });                                                         // Создание локального сервера
    
    opn('http://localhost:8888');                               // Открытие локального сервера в браузере
});

// Слежение за HTML файлами
gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());                                // LiveReload перезагрузка сервера при изменении HTML
});

// Слежение за CSS файлами
gulp.task('css', function() {
    gulp.src('./app/assets/css/*.css')
        .pipe(plumber())
        .pipe(connect.reload());                                // LiveReload перезагрузка сервера при изменении CSS
});

// Слежение за JS файлами
gulp.task('js', function() {
    gulp.src([
        './app/assets/libs/jquery/jquery.min.js',
        './app/assets/libs/angular/angular.min.js',
        './app/assets/libs/angular/angular-animate.min.js',
        './app/assets/libs/angular/angular-ui-router.min.js'])  // Определение порядка склеивания файлов
        .pipe(concat('vendor.js'))                              // Склеивание в vendor.js
        .pipe(gulp.dest('./app/assets/js/'));                   // Помещение vendor.js в соответствующую папку js

    gulp.src('./app/assets/js/app.js')
        .pipe(connect.reload());                                // LiveReload перезагрузка сервера при изменении JS
});

// Компиляция Stylus
gulp.task('stylus', function (){
    return gulp.src('./app/dev/app.styl')
        .pipe(plumber())
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer(
            'last 7 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'ios 6',
            'android 4'
        ))
        .pipe(csso())
        .pipe(gulp.dest('./app/assets/css'));
});

// Компиляция Jade для *.jade
gulp.task('jade', function(){
    gulp.src("./app/dev/*.jade")
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("./app/"));

    gulp.src([
        './app/dev/**/*.jade',
        './app/dev/**/*.jade',
        '!./app/dev/*.jade'])                                   // исключение *.jade, для index.jade
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./app/partials/'));
});

// Компиляция TypeScript для *.ts
gulp.task('ts', function(){
    var tsProject = ts.createProject('tsconfig.json');
    tsProject.src(['./app/dev/**/*.ts'])
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./app/assets/js'));
});

// Запуск слежения
gulp.task('watch', function() {
   gulp.watch(['./app/**/*.html'], ['html']);
   gulp.watch(['./app/assets/css/*.css'], ['css']);
   gulp.watch(['./app/assets/js/*.js'], ['js']);
   gulp.watch(['./app/dev/**/*.jade'], ['jade']);
   gulp.watch(['./app/dev/**/*.styl'], ['stylus']);
   gulp.watch(['./app/dev/**/*.ts'], ['ts']);
});

//***********************************//
// /1.Локальный сервер и автообновление//
//***********************************//

// Зачада по умолчанию
gulp.task('default',['connect', 'watch']);