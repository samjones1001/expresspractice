var mongoose = require('mongoose');

var clue = require('../models/clue');

//this allows the file to access the compiled Model object: Clue
var Clue = mongoose.model('Clue');

module.exports.getCluesbyTreasureHuntId = function(req, res) {

    var treasure_hunt_id = req.params.treasure_hunt_id;

    Clue.findOne({ treasure_hunt_id: treasure_hunt_id  }, function(err, results) {

        res.render('clue', { title: JSON.stringify(results, null, 4) })
        //res.send(results);
    });
};
