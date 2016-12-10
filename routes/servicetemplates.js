var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var config = require('./config');
var conf_str = config.database.username + ":"+config.database.password + "@" + config.database.host + ":" + config.database.port + "/" + config.database.db + "?authSource="+config.database.authdb;
var db= mongojs(conf_str,['CustomerAccount']);
/* GET users listing. */
router.get('/', function(req, res, next) {

	db.ServiceTemplate.find(function(err,results){
		if(err)
			res.send(err);
		else
			res.json(results);
	});
});
router.get('/:id',function(req,res,next){
	db.ServiceTemplate.findOne({
		_id:parseInt(req.params.id)//mongojs.ObjectId(req.params.id)
	}, function(err,results){

		if(err)
			res.send(err);
		else
			res.json(results);
	})
})

/* POST/add a Template */
router.post('/', function(req, res, next) {
    var template = req.body;
    if (!(template.name)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.ServiceTemplate.save(template, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a template */
router.put('/:id', function(req, res, next) {
    var template = req.body;
    var srcObj = req.body;
    var updObj = {};
    for (var key in srcObj) {
        if (srcObj.hasOwnProperty(key) && srcObj[key] !== '' &&  key != '_id') {
            updObj[key] = srcObj[key];
        }
    }


    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.ServiceTemplate.update({
            _id:parseInt(req.params.id) //mongojs.ObjectId(req.params.id)
        }, {$set:updObj}, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

/* DELETE a Network */
router.delete('/:id', function(req, res) {
    db.ServiceTemplate.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});



module.exports = router;
