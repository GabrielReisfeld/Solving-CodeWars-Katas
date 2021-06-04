/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/

function average(scores) {
  var total = scores.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return Math.round(total / scores.length);
}