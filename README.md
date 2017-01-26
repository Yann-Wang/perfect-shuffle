##### perfect shuffle
- position replacement algorithm
    - time complexity is O(n)
    - space complexity is O(n)
    - the code has 16 lines
- cycle leader algorithm
    - time complexity is O(n)
    - space complexity is O(1)
    - the code has 98 lines
- the argument should be a Array whose length should be even.

##### performance
- use benchmarkjs library to compare the performance.
```shell
cd Shuffle
npm install
npm start # compare the value of period property in the result object
```
- according to the test result, the performance of position replacement algorithm is better in the level of ten milliion or under the level.

##### usage

```javascript
let Shuffle = require('../');

let arr = [1,2,3,4,5,6,7,8];
let arr2 = [1,2,3,4,5,6,7,8];

let result1,result2;

result1 = Shuffle.shuffle1(arr);
result2 = Shuffle.shuffle2(arr2);

console.log(result1,result2);
```

##### test 
```shell
# test
npm test
```

