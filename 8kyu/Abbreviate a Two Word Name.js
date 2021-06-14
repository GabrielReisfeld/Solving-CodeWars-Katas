/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name) {
  var a = name.split(" ");
  return `${a[0][0].toUpperCase()}.${a[1][0].toUpperCase()}`;
}