function mergesort(array) {
    var hi, mid;
    for (var len = 2; len < array.length*2; len*=2)
    {
        hi = (len > array.length ? array.length : len)-1; 
        for (var lo = 0; lo < array.length; lo+=len)
        {   
            mid = lo+ Math.floor((len-1)/2);
            merge(array, lo, mid, hi);
            hi = (hi + len > array.length-1) ? array.length-1 : hi + len;   
        }
        
    }
}

function merge(x, lo, mid, hi)
{
    var tmp;
    var a = lo, b = mid+1
    for(var k = lo; k<= hi; k++) {
        if(a >= b || (b <= hi && x[a] > x[b])) {
            tmp = x[b];
            for(var i = b; i > a; i--)
            {
                x[i] = x[i-1];
            }
            x[a] = tmp;
            b++;
        }
        a++;
    }
}