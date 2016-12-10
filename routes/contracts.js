var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();
var config = require('./config');
var conf_str = config.database.username + ":"+config.database.password + "@" + config.database.host + ":" + config.database.port + "/" + config.database.db + "?authSource="+config.database.authdb;
var db= mongojs(conf_str,['CustomerAccount']);
/* GET users listing. */
router.get('/', function(req, res, next) {

	db.ServiceContract.find(function(err,contracts){
		if(err)
			res.send(err);
		else
			res.json(contracts);
	});
});
router.get('/:id',function(req,res,next){
	db.ServiceContract.findOne({
		_id:mongojs.ObjectId(req.params.id)
	}, function(err,contracts){

		if(err)
			res.send(err);
		else
			res.json(contracts);
	})
})

/* POST/add a Contract */
router.post('/', function(req, res, next) {
    var contract = req.body;
    if (!(contract.contract_id)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.ServiceContract.save(contract, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a Contract */
router.put('/:id', function(req, res, next) {
    var contract = req.body;
    var srcObj = req.body;
    var updObj = {};
    for (var key in srcObj) {
        if (srcObj.hasOwnProperty(key) && srcObj[key] !== '' &&  key != '_id') {
            updObj[key] = srcObj[key];
        }
    }
/*
    if (contract.contract_id) {
        updObj.contract_id = contract.contract_id;
    }
    if (contract.customer_name) {
        updObj.customer_name = contract.customer_name;
    }
    if (contract.account_balance) {
        updObj.account_balance = contract.account_balance;
    }
    if (contract.contract_duration_months) {
        updObj.contract_duration_months = contract.contract_duration_months;
    }
    if (contract.contract_type) {
        updObj.contract_type = contract.contract_type;
    }
    if (contract.tariff_id) {
        updObj.tariff_id = contract.tariff_id;
    }

    if (contract.state)
        updObj.state = contract.state;
    else
        updObj.state = 0;
    if (contract.signed)
        updObj.signed = contract.signed;
    else
        updObj.signed = 0;
*/
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.ServiceContract.update({
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

/* DELETE a Network */
router.delete('/:id', function(req, res) {
    db.ServiceContract.remove({
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
