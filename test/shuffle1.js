/**
 * Created by a_wav on 2017/1/25.
 */
const chai = require('chai');
let expect = chai.expect;
let assert = chai.assert;
let shuffle1 = require('../lib/shuffle1');

describe('#shuffle1()', function() {
    it('length is 8', function(done) {
        let arr = [1,2,3,4,5,6,7,8];
        let result = shuffle1(arr);

        assert.deepEqual(result,[5,1,6,2,7,3,8,4]);
        done();
    });
});

describe('#shuffle1()', function() {
    it('length is 2', function(done) {
        let arr = [1,2];
        let result = shuffle1(arr);

        assert.deepEqual(result,[2,1]);
        done();
    });
});