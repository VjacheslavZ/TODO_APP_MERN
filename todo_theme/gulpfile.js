var gulp         = require("gulp"),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    cssnano      = require("gulp-cssnano"),
    rename       = require("gulp-rename"),
    imagemin     = require("gulp-imagemin"),
    pngquant     = require("imagemin-pngquant"),
    cache        = require("gulp-cache"),
    autoPrefixer = require("gulp-autoprefixer"),
    pug          = require('gulp-pug'),
    gutil        = require("gulp-util"),
    notify = require("gulp-notify");
    sourceMaps = require('gulp-sourcemaps');

gulp.task("sass", function () {
    return gulp.src([
            'app/sass/main.sass'
        ])
	    .pipe(sourceMaps.init())
        .pipe(sass())
        .on('error', function(err) {
            const type = err.type || '';
            const message = err.message || '';
            const extract = err.extract || [];
            const line = err.line || '';
            const column = err.column || '';
            gutil.log(gutil.colors.red.bold('[Less error]') +' '+ gutil.colors.bgRed(type) +' ('+ line +':'+ column +')');
            gutil.log(gutil.colors.bold('message:') +' '+ message);
            gutil.log(gutil.colors.bold('codeframe:') +'\n'+ extract.join('\n'));
            this.emit('end');
        })
        .pipe(autoPrefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
	    .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task("css-libs", ['sass'], function () {
    return gulp.src("app/sass/libs.sass")
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("app/css"));
});

gulp.task("browser-sync", function () {
    browserSync({
        server:{
            baseDir: "app"
        },
        notify: false,
        open: false
    });
});

gulp.task("img-min", function () {
   return gulp.src("app/img/**/*.jpg")
       .pipe(cache(imagemin({
           interlaced: true,
           progressive: true,
           svgoPlugins: [{removeViewBox: false}],
           une: [pngquant()]
       })))
       .pipe(gulp.dest("dist/img"));
});

gulp.task("pages", function() {
    return gulp.src([
        "app/pages/index/index.pug",
        "app/pages/login/login.pug",
        "app/pages/register/register.pug",
        "app/pages/groups/groups.pug",
        "app/pages/list/list.pug",
        "app/pages/create/create.pug",
        "app/pages/time_line/time_line.pug",
    ])
        .pipe(pug({pretty: true}))  //с переносом pretty: true
        .on('error', notify.onError(function (error) {
            return error
        }))
        .pipe(gulp.dest("./app"))
        .on('error', gutil.log)
        .pipe(browserSync.stream())
});

gulp.task("watch",[ "browser-sync", "css-libs", "pages"], function () {
    gulp.watch("app/pages/**/*.pug", ['pages']);
    gulp.watch('app/sass/*.sass', ["sass"]);
    gulp.watch('app/sass/libs.sass', ["css-libs"]);//ели подключен новый плагин
    gulp.watch("app/pages/**/*.js", ["script"]);
});