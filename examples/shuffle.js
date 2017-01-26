/**
 * Created by a_wav on 2017/1/26.
 */

let Shuffle = require('../');

let arr = [1,2,3,4,5,6,7,8];
let arr2 = [1,2,3,4,5,6,7,8];

let result1,result2;

result1 = Shuffle.shuffle1(arr);
result2 = Shuffle.shuffle2(arr2);

console.log(result1,result2);