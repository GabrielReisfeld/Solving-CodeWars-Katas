/*
Return the type of the sum of the two arguments
*/

function typeOfSum(a, b) {
  if (typeof (a + b) === "number") return "number";
  if (typeof (a + b) === "string") return "string";
}