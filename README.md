# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

##### Worst Case

The worst case for this implementation is a reverse-sorted array because it involves
the highest possible shifts during the merge step of my code. 

##### mergesort() Function

The outer loop uses a variable called len to increase the amount that the second loop 
iterates through. The first loop initializes len to 2, which is doubled every iteration 
until the entire len is greater than n. This loop has an asymptotic complexity of $\Theta(log(n))$.
The inner loop divides the array into n/len parts and iterates through those parts until the
end of the array. Therefore, the complexity of this loop is n/len. 

##### merge() Function

The outer loop in the merge function is simple as it iterates by
one for each value between the high and low indexes. This length is
the same as len from the mergesort() function. The inner loop is executed
if the first value of the completely sorted part (index of a) is larger than
the first value of the second part (index of b) and b $\le$ the high index or 
wehen a is greater than b. For the worst case, this loop will occur for half 
the values between the high and low indexes, as it shifts values from the second 
half to the first half. Therefore this length is going to be len/2.

##### Time Complexity

Knowing all this, since all the loops are nested we can multiply the complexities
together (ignoring constants because we are analyzing this asymptotically). This 
gives us $log(n) * n/len * len * len = nlog(n) * len$. The value of len is equal to
n/2 for the first iteration, n/4 for the second and so on until the denominator is equal
to n. Therefore len can be represented as a geometric series. As n approaches infinity,
this gives us:

$nlog(n) * \displaystyle\sum_{i=1} ^{\infty} \frac{n}{2^i}$ 

Since this series converges to n, we are left with an asymptotic complexity of:

$\Theta(n^2log(n))$

## Extra Help

https://www.overleaf.com/learn used for help with LaTeX syntax, specifically for the series. 
Additionally, the merge function provided in the lecture was used as a base for my merge function. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
