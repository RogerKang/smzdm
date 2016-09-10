var cp  = require("child_process");
var fs = require('fs');
var path = require('path');
var async = require('async');


exports.sshCompare= function(req, res, next){


    var privateKey = req.body.privateKey;
    var publicKey = req.body.publicKey.replace(/[\r\n]/g,"");

    var privateKeyFileLocation = __dirname + path.sep + 'tempSSH' ;
    if (!fs.existsSync(privateKeyFileLocation)) {
        fs.mkdirSync(privateKeyFileLocation);
    }

    var tempPrivateKeyFilePath = privateKeyFileLocation+ path.sep + 'id.rsa';


    async.waterfall([function(callback){


        var stream = fs.createWriteStream(tempPrivateKeyFilePath);

        stream.once('open',function(fd){

            stream.write(privateKey);
            stream.end();
            callback(null);

        });

    },function(callback){

        var command = 'chmod 500 '+ __dirname + path.sep+'tempSSH'+path.sep+'id.rsa'+';ssh-keygen -y -f '+ __dirname + path.sep+'tempSSH'+path.sep+'id.rsa';

        // after timeout, childprocess is killed, but if youe see from terminal, you will see: Enter passphrase:, it is killed already, yuou can see ps -A, it is no longger exist, but its output before it killed('Enter passphrase') still exist in the terminal it called
        var childProcess = cp.exec(command,{timeout:3000},function(error, stdout, stderr){

            if(error || stderr)
                callback('Fail');
            else{

                var buffer = new Buffer(stdout);
                var str = buffer.toString().replace(/[\r\n]/g,"");

                console.log(publicKey);
                console.log(str);

                console.log(str == publicKey);

                if(str != publicKey)
                    callback('Fail');
                else    callback(null);


            }
            childProcess.kill();

        });

    }

//        fs.unlink(tempPrivateKeyFilePath,function(err){
//
//
//            if(err)
//                callback('Fail');
//            else
//                callback(null);
//
//        });




    ],function(err){

        cp.exec('rm -rf '+ __dirname +path.sep+'tempSSH',function(error, stdout, stderr){

            if(error || stderr || err)
                res.json('Fail');
            else res.json('Good');

        });

    });






};