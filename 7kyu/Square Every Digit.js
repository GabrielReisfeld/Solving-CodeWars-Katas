/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  var string = num.toString();
  var results = [];
  for (let i = 0; i < string.length; i++) {
    results[i] = Math.pow(string[i], 2);
  }
  return Number(results.join(""));
}