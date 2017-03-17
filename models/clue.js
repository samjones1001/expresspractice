var mongoose = require('mongoose');

var ClueSchema = new mongoose.Schema({
	treasure_hunt_id: Number,
	clue_sequence: Number,
	clue: String,
	image: String,
	longitude: Number,
	latitude: Number,
	nonsense: String
});

//this compiles the model for Schema object defined above
var Clue = mongoose.model('Clue', ClueSchema);

module.exports = { Clue: Clue }
