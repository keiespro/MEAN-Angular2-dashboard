var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db= mongojs('mydb',['TransactionTrace','SystemQueue']);
/* GET users listing. */
router.get('/', function(req, res, next) {
	db.Regions.find(function(err,regions){
		if(err)
			res.send(err);
		else
			res.json(regions);
	})
});
router.get('/submitted/:st_id',function(req,res,next){
    db.TransactionTrace.find({
        service_template_id:req.params.st_id//mongojs.ObjectId(req.params.st_id)
    }, function(err,messages){

        if(err)
            res.send(err);
        else
            res.json(messages);
    })
})
router.get('/queued/:st_id',function(req,res,next){
    db.SystemQueue.find({
        service_template_id:req.params.st_id//mongojs.ObjectId(req.params.st_id)
    }, function(err,messages){

        if(err)
            res.send(err);
        else
            res.json(messages);
    })
})



module.exports = router;
