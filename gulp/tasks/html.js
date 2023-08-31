//плагин склейка html
import fileinclude from "gulp-file-include";
//import webpHtmlNosvg from "gulp-webp-html-nosvg";//формат webp 


export const html = () => {
    return app.gulp.src(app.path.src.html) 
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
           title:"HTML",
            message: "Друг мой ошибка: <%= error.message %>"
            }))
           )
    .pipe(fileinclude())
   // .pipe(webpHtmlNosvg())//не работает формат webp
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream()); 
}