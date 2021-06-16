/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  var x = 0;
  var o = 0;
  var array = str.toLowerCase().split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "x") {
      x += 1;
    }
    if (array[i] === "o") {
      o += 1;
    }
  }
  return x === o ? true : false;
}