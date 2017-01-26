/**
 * Created by a_wav on 2017/1/22.
 */


/**
 * perfect shuffle -- cycle leader
 * time complexity is O(n), space complexity is O(1)
 */
function shuffle2(arr) {
    let len = arr.length;
    let n = len/2;
    let _2m=1,k=0;
    let start,end,num;
    let previousIndex = 0;
    let offset = 0;
    let t;

    while(n>1){
        //get m, k
        while(_2m*3<2*n){
            ++k;
            _2m *= 3;
        }

        m = parseInt(_2m/2);

        // right shift
        start = offset + m;
        end = start+n-1;
        num = n-m;
        RightShift(arr,start,end,num);

        // shuffle
        for(var i=0;i<k;++i){
            cycleLeader(arr,Math.pow(3,i)-1,m,offset);
        }

        // restart
        previousIndex = 2*m;
        offset = offset + 2*m;
        n = n-m;
        _2m = 1;
        k = 0;
    }

    //n=1
    t = arr[offset];
    arr[offset] = arr[offset+1];
    arr[offset+1] = t;

    return arr;
}

/**
 *
 * @param arr
 * @param from
 * @param to
 */
function Reverse(arr,from,to){
    let tmp;

    while(from<to){
        tmp = arr[from];
        arr[from] = arr[to];
        arr[to] = tmp;
        ++from;
        --to;
    }
}

/**
 *
 * @param arr
 * @param start
 * @param end
 * @param num
 */
function RightShift(arr,start,end,num){

    if(start<end){
        Reverse(arr,start,start+num-1);
        Reverse(arr,start+num,end);
        Reverse(arr,start,end);
    }
}

/**
 *
 * @param arr
 * @param from
 * @param n
 */
function cycleLeader(arr,from,n,offset){
    //console.log(arr+1);
    let mod = 2*n+1;
    let next = (2*from+1)%mod;
    let t;

    while(next!=from){
        t = arr[next+offset];
        arr[next+offset] = arr[from+offset];
        arr[from+offset] = t;
        next = (2*next+1)%mod;
    }
}

module.exports = shuffle2;