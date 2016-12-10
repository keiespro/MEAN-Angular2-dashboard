var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var config = require('./config');
var conf_str = config.database.username + ":"+config.database.password + "@" + config.database.host + ":" + config.database.port + "/" + config.database.db + "?authSource="+config.database.authdb;
var db= mongojs(conf_str,['CustomerAccount']);
/* GET users listing. */
router.get('/', function(req, res, next) {
	db.CustomerAccount.find(function(err,customers){
		if(err)
			res.send(err);
		else
			res.json(customers);
	})
});
router.get('/:id',function(req,res,next){
	db.CustomerAccount.findOne({
		_id:mongojs.ObjectId(req.params.id)
	}, function(err,customers){

		if(err)
			res.send(err);
		else
			res.json(customers);
	})
})

/* POST/add a Customer */
router.post('/', function(req, res, next) {
    var customer = req.body;
    if (!(customer.name)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.CustomerAccount.save(customer, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a Customer */
router.put('/:id', function(req, res, next) {
    var customer = req.body;
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
        db.CustomerAccount.update({
            _id: mongojs.ObjectId(req.params.id)
        }, {$set:updObj}, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

/* DELETE a Customer */
router.delete('/:id', function(req, res) {
    db.CustomerAccount.remove({
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
