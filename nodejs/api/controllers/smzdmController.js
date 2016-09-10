var mongoose = require('mongoose');

var options = {
    server: {
        poolSize: 10
    },
    user: '',
    pass: ''
}
mongoose.connect('mongodb://localhost:27017/smzdm', options);

var FaxianSchema = new mongoose.Schema({
    name            : String
});

var Faxian = mongoose.model('Faxian', FaxianSchema, 'faxian');



exports.faxianSearch = function(req, res, next){


    var skip = req.query.skip;
    if(skip == null)
        skip =0;

    var pageSize = req.query.pageSize;
    if(pageSize == null)
        pageSize = 10;

    Faxian.find().sort({subject_id:-1}).skip(skip).limit(pageSize).exec(function(err, resultList){



        setTimeout(function(){
            res.json(resultList);

        },1000);








    });


};