const path = require('path') //встроенный модуль node.js, который позволяет работать с путями
const HTMLPlugin = require('html-webpack-plugin') //подключение плагина для создания html файлов

/*
данный файл запускаеться на платформе node.js
module.exports - позволяет экспортировать какой-либо объект из файла
 */

module.exports = {
   /* mode: 'production'*/  //модуль webpack, который указывает в каком виде делать сборку: production или development
                            // данные параметры варианты сборки лучше указать в package.json :
                            // "dev": "webpack --mode development"
                            // "build": "webpack --mode production"
    entry: './src/index.js', //указывает webpack входной файл проекта
    output: { //второй обязательный параметр, который указывает куда складывать результаты работы webpack
        filename: 'bundle.js', //имя файла получаемого в результате работы webpack
        path: path.resolve(__dirname, 'dist') //путь куда буду положены все статические файлы проекта
            //__dirname - параметр указывающий на текущию папку
        //'dist' - второй параметр который в текущей папке указывает конечную папку для файлов проекта
    },
    plugins: [ //масссив для подключения плагинов
        new HTMLPlugin({
            filename: "index.html", //название получаемого файла
            template: "./src/index.html" //шаблон файла на основе которого будет создан рабочий файл
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
/*
для того, чтобы инициализировать плагины в webpack нужно создать экзеппляр класса плагина, который хотим подключить
*/
