'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
//config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:9090/api，
// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [/*{
    path: "/api/*",
    target: "https://cnodejs.org",
    host: "cnodejs.org"
},{

    path: "/smzdm/*",
    target: "http://kangro-w7:3002",
    host: "kangro-w7"

}*/{
    path: "/zdmpic/*",
    target: "http://y.zdmimg.com",
    host: "y.zdmimg.com"

},{
    path: "/zdmpicm/*",
    target: "http://ym.zdmimg.com",
    host: "ym.zdmimg.com"

}];
//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy
});
// see from soucre code in webpack-dev-server
app.app.get('/hello',function(req, res){

    res.json({status:'smzdm test'});

});

app.listen(8090,function(){

    console.log('CNode init.');


});