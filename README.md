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
until the entire len is greater than n. The inner loop divides the array into
n/len parts and iterates through those parts until the end of the array. Therefore,
merge() is called n/2 times with a length of 2, then n/4 times with a length of 4, 
then n/8 times with a length of 8. . . then 1 (n/n) time with a length of n. 

##### merge() Function

The outer loop in the merge function is simple as it iterates by
one for each value between the high and low indexes. This length is
the same as len from the mergesort() function. The inner loop is executed
if the first value of the completely sorted part (index of a) is larger than
the first value of the second part (index of b) and b $\le$ the high index or 
wehen a is greater than b. The job of this loop is to shift elements of the 
first part so that the value at index b is in the correct place. For the worst 
case, this loop will occur for half the values between the high and low indexes
and the amount of elements that have to be shifted is always going to be the length/2. 

##### Time Complexity

Knowing all this, the time complexity boils down to the number of shifts that
have to be made. Of the n times that merge is called, the first n/2 parts 
(all of length 2), require 1 shift. The next n/4 parts require 2 shifts. This
continues until the final part of length n, which requires n/2 shifts. This can be 
demonstrated through a summation of 1*n/2 + 2*n/4 +. . . + n/2*1. Assymptotically, 
this can represented as a product of two of the same geometric series: 

$\displaystyle\sum_{k=1} ^{\infty} \frac{n}{2^i}$ 

Since each of these series converge to n, we are left with an asymptotic complexity of:
$\Theta(n^2)$

## Extra Help

https://www.overleaf.com/learn used for help with LaTeX syntax, specifically for the series. 
Additionally, the merge function provided in the lecture was used as a base for my merge function. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
