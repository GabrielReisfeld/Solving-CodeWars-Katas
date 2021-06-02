/*
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"

Notes:

    If either input is an empty string, consider it as zero.

*/

function sumStr(a,b) {
    if (a && b){
      var suma = parseInt(a) + parseInt(b)
    return suma.toString()
    } else if (a){
      return a
    } else if (b) {
      return b
    } else {
      return '0'
    }
  }