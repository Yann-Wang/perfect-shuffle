/**
 * Created by a_wav on 2017/1/26.
 */
/**
 * perfect shuffle -- position replacement
 * time complexity is O(n), space complexity is O(n)
 * @returns {*}
 */
function shuffle1(arr) {

    let len = arr.length;
    let n = len/2;
    let arr2 = new Array(len);

    for(let i=0;i<len;++i){
        arr2[(2*i+1)%(2*n+1)] = arr[i];
    }

    for(let j=0;j<len;++j){
        arr[j] = arr2[j];
    }

    return arr;
}

module.exports = shuffle1;