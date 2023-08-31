import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.images)

    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error:<%= error.message %>"
        }))
        )
        
        
        .pipe(app.plugins.newer(app.path.build.images))//вызываем newer и проверем картинки с резудьтатом 
        .pipe(webp()) //вызываем плагин webp
        .pipe(app.gulp.dest(app.path.build.images))//формат папки webp путь
        .pipe(app.gulp.src(app.path.src.images))// опять нужен доступ к папке
        .pipe(app.plugins.newer(app.path.build.images))//опять проверяяем обновления
  
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            interlaced: true,
            optimizationLevel:3 //0 to 7
          }))//оптимизатор 
        .pipe(app.gulp.dest(app.path.build.images))//выгружаем изображенияя 
        .pipe(app.gulp.src(app.path.src.svg))//получаем доступ к svg  
        .pipe(app.gulp.dest(app.path.build.images))//копируем в папку результатом 
        .pipe(app.plugins.browsersync.stream());
}