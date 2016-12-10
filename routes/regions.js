var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var config = require('./config');
var conf_str = config.database.username + ":"+config.database.password + "@" + config.database.host + ":" + config.database.port + "/" + config.database.db + "?authSource="+config.database.authdb;
var db= mongojs(conf_str,['CustomerAccount'],{ssl:config.database.is_ssl});
/* GET users listing. */
router.get('/', function(req, res, next) {

	db.Regions.find(function(err,regions){
		if(err)
			res.send(err);
		else
			res.json(regions);
	})/*
    db.Regions.aggregate([
        {
            $lookup:
            {
                from: "CustomerAccount",
                localField:"_id",
                foreignField:"region_id",
                as:"customers"
            },
            $project:{
                //foreignField:ObjectId("$region_id")
            }
        }
    ],function(err,regions){
        if(err)
            res.send(err);
        else
            res.json(regions);
    })*/
});
router.get('/:id',function(req,res,next){
	db.Regions.findOne({
		_id:mongojs.ObjectId(req.params.id)
	}, function(err,regions){

		if(err)
			res.send(err);
		else
			res.json(regions);
	})
})

/* POST/SAVE a Region */
router.post('/', function(req, res, next) {
    var region = req.body;
    if (!(region.region_name) && !(region.description)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.Regions.save(region, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a Region */
router.put('/:id', function(req, res, next) {
    var region = req.body;
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
        db.Regions.update({
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

/* DELETE a Region */
router.delete('/:id', function(req, res) {
    db.Regions.remove({
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
