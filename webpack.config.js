var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:  {
        main1:path.resolve(__dirname, './src/js/main.js'),
        main2:path.resolve(__dirname, './src/js/main2.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].js"
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'head',
            title:'首页'
        })
    ]
};