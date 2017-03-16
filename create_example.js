//
// var createClues = function() {
//
// 	mongoose.connection.once('open', function(){
//
// 		var newClue1 = new myClues({
// 			treasure_hunt_id: 2,
// 			clue_sequence: 1,
// 			clue: "under the bed",
// 			image: "bla.png",
// 			longitude: 78.989,
// 			latitude: 65.989,
// 			nonsense: "rubbish"
// 		});
//
// 		newClue1.save( function(err,doc){
// 			console.log("Is Document new? " + newClue1.isNew);
// 			console.log("\nSaved document: " + doc);
// 		});
//
// 		myClues.create(newClue1, function(err, doc){
//
// 			console.log("\nCreated document: " + doc);
//
// 			mongoose.disconnect();
// 		});
//
// 	});
// }
//
// createClues();
