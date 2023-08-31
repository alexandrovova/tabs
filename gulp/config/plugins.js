//подключчаем плагин Поиск и замен 
import  replace  from "gulp-replace";
import plumber from "gulp-plumber"//обработка ошибок 
import notify from "gulp-notify";//сообщение 
import browsersync from "browser-sync";//локальный сервер
import newer from "gulp-newer";
import ifPlugin from "gulp-if";//условие ветвление 

//экспортируем объект плагинов 
export const plugins = {
    replace:replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer,
    if :ifPlugin
}
