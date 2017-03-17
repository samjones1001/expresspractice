var expect = require('chai').expect;
var sinon = require('sinon');
var assert = require('assert');

var router = require('../routes/clue');
var Clue = require('../models/clue');
//var app = require('../app');

describe('clue route', function() {

    beforeEach(function() {
        sinon.stub(Clue, 'findOne');
    });


    afterEach(function() {
        Clue.findOne.restore();
    });
//
//     it('should send clues by treasure hunt id', function() {
//        var req = { params: { treasure_hunt_id: 1 } };
//        var a = { treasure_hunt_id: 1 };
//         var b = { treasure_hunt_id: 2 };
//         var expectedModels = [a];
//         Clue.findOne.yields(null, expectedModels);
//
//         var res = {
//             send: sinon.stub()
//         };
//
//         router.get('/:treasure_hunt_id', req, res);
//
//         sinon.assert.calledWith(res.send, expectedModels);
//     });
});
