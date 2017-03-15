var express = require('express');
var router = express.Router();


var clues = {

  'clue_1': {
    id: 1,
    treasure_hunt_id: 1,
    clue_sequence: 1,
    clue: "under the bed",
    image: "bla.png",
    longitude: 53.567,
    latitude: 76.898
  },

  'clue_2': {
    id: 2,
    treasure_hunt_id: 1,
    clue_sequence: 2,
    clue: "under the stairs",
    image: "blabla.png",
    longitude: 55.567,
    latitude: 98.898
  }
};

var treasureHunts = {

  'treasureHunt_1': {
    id: 1,
    name: "Home hunt"
  }

};

var findCluesByClueName = function (cluename, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  if (!clues[cluename])
    return callback(new Error(
      'No clue matching '
       + cluename
      )
    );
  return callback(null, clues[cluename]);
};

router.get('/:cluename', function(request, response, next) {
  var clueName = request.params.cluename;
  findCluesByClueName(clueName, function(error, clue) {
    if (error) return next(error);
    return response.render('clue', { title: JSON.stringify(clue, null, 4) });
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyNodeTest' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});

module.exports = router;
