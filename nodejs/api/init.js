var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
// support two parameter types:
//"application/json; charset=utf-8" : JSON.stringify({privateKey: privateKey, publicKey: publicKey})
//"application/x-www-form-urlencoded; charset=utf-8" : {privateKey: privateKey, publicKey: publicKey}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/simple', function (req, res) {
    //res.redirect('/simple/simple.html');
    //res.sendFile('public/simple/simple.html');
    res.sendFile(path.join(__dirname, './public', 'simple/simple.html'));
});

app.get('/sshCompare', function (req, res) {
    //res.redirect('/simple/simple.html');
    //res.sendFile('public/simple/simple.html');
    res.sendFile(path.join(__dirname, './public', 'simple/SSHCompare.html'));
});


app.get('/hello', function (req, res) {
    //res.redirect('/simple/simple.html');
    //res.sendFile('public/simple/simple.html');
    res.sendFile(path.join(__dirname, './public', 'simple/hello.html'));
});

var sshControllers = require('./controllers/sshController');


app.post('/compareSSHKeys',sshControllers.sshCompare);

var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

var smzdmController = require('./controllers/smzdmController');

app.get('/smzdm/list',function(req,res){


    // allow cross domain request, * 代表可以跨域的源地址为所有
    res.setHeader("Access-Control-Allow-Origin",'*');
   smzdmController.faxianSearch(req, res);


});

app.use(express.static('public'));
