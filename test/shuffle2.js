/**
 * Created by a_wav on 2017/1/25.
 */

const chai = require('chai');
let expect = chai.expect;
let assert = chai.assert;
let debug  = require('debug')('shuffle2');
let shuffle2 = require('../lib/shuffle2');


describe('#shuffle2()', function() {
    it('length is 4', function(done) {
        let arr = [1,2,3,4];
        let result;

        debug(arr);

        result = shuffle2(arr);
        assert.deepEqual(result,[3,1,4,2]);

        debug(result);
        done();
    });
});


describe('#shuffle2()', function() {
    it('length is 20', function(done) {
        let arr = [];
        let result;

        for(let i=0;i<20;++i){
            arr[i] = i+1;
        }

        debug(arr);
        result = shuffle2(arr);
        debug(result);
        done();
    });
});
