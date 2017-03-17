var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var clue = require('../models/clue');
//var clues = require('../controllers/clues');

//this allows the file to access the compiled Model object: Clue
var Clue = mongoose.model('Clue');


router.get('/:treasure_hunt_id', function(req, res, next) {

	var treasure_hunt_id = req.params.treasure_hunt_id;

	Clue.findOne({ treasure_hunt_id: treasure_hunt_id }, function(err, results){
		if(!err){
		res.render('clue', { title: JSON.stringify(results, null, 4) })
		//res.send(results); we will use this to send the result as JSON instead
		}
		else{
			console.log("Error");
		}
	});


});

module.exports = router;

// module.exports = function (app) {
//
// 	app.get('/:treasure_hunt_id', clues.getCluesbyTreasureHuntId);
//
// }
