/**
 * Created by a_wav on 2017/1/25.
 */

let Benchmark = require('benchmark');
let Shuffle = require('../lib/shuffle1');
let suite = new Benchmark.Suite;

suite.add('shuffle1',function(){
    let arr = [];
    for(let i=0;i<20000000;++i){
        arr[i] = i+1;
    }
    Shuffle(arr);
})

// add listeners
    .on('cycle', function(event) {
        console.log(event.target.times);
    })

    // run async
    .run({ 'async': true });
