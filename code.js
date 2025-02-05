function mergesort(array) {
    var hi, mid;
    //Resize the length of arrays being merged
    for (var len = 2; len < array.length*2; len*=2) {
        hi = (len > array.length ? array.length : len)-1;
        //Iterate through the array merging each section of length: len
        for (var lo = 0; lo < array.length; lo+=len) {
            mid = lo+ Math.floor((len-1)/2);
            array = merge(array, lo, mid, hi);
            hi = (hi + len > array.length-1) ? array.length-1 : hi + len;
        }
    }
    return array;
}

//Merges values past the midpoint by shifting elements in front of it
function merge(x, lo, mid, hi) {
    var tmp, a = lo, b = mid+1;
    for(var k = lo; k<= hi; k++) {
        if(a >= b || (b <= hi && x[a] > x[b])) {
            tmp = x[b];
            for(var i = b; i > a; i--) {
                x[i] = x[i-1];
            }
            x[a] = tmp;
            b++;
        }
        a++;
    }
    return array;
}