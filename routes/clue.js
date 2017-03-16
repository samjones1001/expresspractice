var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var clue = require('../models/clue');

//this allows the file to access the compiled Model object: Clue
var Clue = mongoose.model("Clue");


router.get('/:treasure_hunt_id', function(req, res, next) {

	var treasure_hunt_id = req.params.treasure_hunt_id;

	Clue.findOne({ treasure_hunt_id: treasure_hunt_id }, function(err, results){
		if(!err){
		res.render('clue', { title: JSON.stringify(results, null, 4) })
		}
		else{
			console.log("Error");
		}
	});

});

module.exports = router;
