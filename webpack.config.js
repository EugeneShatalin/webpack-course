const path = require('path') //встроенный модуль node.js, который позволяет работать с путями
const HTMLPlugin = require('html-webpack-plugin') //подключение плагина для создания html файлов
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //подключение плагина для создания css файлов
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //оптимизатор css файлов
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //оптимизатор js файлов

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
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}), //минимайзер css
            new UglifyJsPlugin({}) //минимайзер js
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    plugins: [ //масссив для подключения плагинов
        new HTMLPlugin({
            filename: "index.html", //название получаемого файла
            template: "./src/index.html" //шаблон файла на основе которого будет создан рабочий файл
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //формат файла для стилей
                use: [MiniCssExtractPlugin.loader, 'css-loader'], //обработка и загрузка стилей
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ],
    },
}
/*
для того, чтобы инициализировать плагины в webpack нужно создать экзеппляр класса плагина, который хотим подключить
*/
