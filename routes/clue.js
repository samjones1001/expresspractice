var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var Clue = require('../models/clue');
myClues = mongoose.model("Clue");

var express = require('express');
var router = express.Router();

var showClues = function() {
	var ClueQuery = myClues.find({ treasure_hunt_id : 2 }, function(err, docs) {
		console.log(docs);
	});
	
}

showClues();

// var db = require('../db');

// var clues = {
//
//   'clue_1': {
//     id: 1,
//     treasure_hunt_id: 1,
//     clue_sequence: 1,
//     clue: "under the bed",
//     image: "bla.png",
//     longitude: 53.567,
//     latitude: 76.898
//   },
//
//   'clue_2': {
//     id: 2,
//     treasure_hunt_id: 1,
//     clue_sequence: 2,
//     clue: "under the stairs",
//     image: "blabla.png",
//     longitude: 55.567,
//     latitude: 98.898
//   }
// };
//
// var treasureHunts = {
//
//   'treasureHunt_1': {
//     id: 1,
//     name: "Home hunt"
//   }
//
// };
//
// var findCluesByClueName = function (cluename, callback) {
//   // Perform database query that calls callback when it's done
//   // This is our fake database
//   if (!clues[cluename])
//     return callback(new Error(
//       'No clue matching '
//        + cluename
//       )
//     );
//   return callback(null, clues[cluename]);
// };
//
// router.get('/:cluename', function(request, response, next) {
//   var clueName = request.params.cluename;
//   findCluesByClueName(clueName, function(error, clue) {
//     if (error) return next(error);
//     return response.render('clue', { title: JSON.stringify(clue, null, 4) });
//   });
// });
// //

// var findCluesByTreasureHuntId = function (treasure_hunt_id, callback) {
//   // Perform database query that calls callback when it's done
//   // This is our fake database
//   var clues = db.get().collection('clues');

//   myClue = clues.findOne({ treasure_hunt_id: treasure_hunt_id })
//   if (!myClue)
//     return callback(new Error(
//       'No clue with treasure hunt id '
//        + treasure_hunt_id
//       )
//     );
//   return callback(null, myClue);
// };

// router.get('/:treasure_hunt_id', function(req, res, next) {
//   var treasure_hunt_id = req.params.treasure_hunt_id;
//   findCluesByTreasureHuntId(treasure_hunt_id, function(err, clue) {
//   	if (err)
//   		return next(err);
//   	return res.render('clue', { title: JSON.stringify(clue, null, 4) })
//   });
// //get the table in the database
// //   var collection = db.get().collection('clues');

// // //get the data from the table
// //   collection.find().toArray(function(err, clue) {
// //    res.render('clue', { title: JSON.stringify(clue, null, 4)})

// //  });

// });


module.exports = router;

