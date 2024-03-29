/*
Task

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.
Example

25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

function halvingSum(n) {
  let res = 0;
  while (n >= 1) {
    res += n;
    n = Math.floor(n / 2);
  }
  return res;

  // Another Solution (recursion):
  // if (n === 1) return n;
  // return n + halvingSum(Math.floor(n/2));
}