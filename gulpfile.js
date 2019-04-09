var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', done=> {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	done();	
});
gulp.task('browser-sync', done=> { // Создаем таск browser-sync
    browserSync.init({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app'// Директория для сервера - app
        },
        open: true,
        notify: false // Отключаем уведомления
        
    });done();
});
gulp.task('watch',  done=> {
    gulp.watch('app/sass/**/*.sass',  gulp.series('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/*.js').on('change', browserSync.reload);
    gulp.watch('app/css/**/*.css').on('change', browserSync.stream); // Обновляем CSS на странице при изменении
    // Наблюдение за другими типами файлов
    done();
});
 gulp.task('default', gulp.parallel('browser-sync','sass','watch'));
//gulp.task('default', function(done) {  //<---- Insert 'done' as a parameter here...
//   gulp.series('browser-sync','sass','watch');
//   done(); //<---- ...and call it here
//});