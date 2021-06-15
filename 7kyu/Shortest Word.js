/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  return s.split(" ").reduce((a, b) => (b.length > a.length ? a : b)).length;
  /*var array = s.split(' ');
    var min = array.reduce((a, b) => (b.length > a.length) ? a : b)
    return min.length;*/
}