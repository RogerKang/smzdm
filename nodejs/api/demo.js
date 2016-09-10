var express = require('express');
var app = express();
app.use('/hello',function(req, res, next){

    res.send('Hello.');

});
app.use('/hehe',function(req, res, next){

    res.send('heeh.');

});

var server = app.listen(3005, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});