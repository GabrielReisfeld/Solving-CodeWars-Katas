/*
Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.
*/

function Cube(n = 0) {
  this.side = n;
  this.getSide = function () {
    return this.side;
  };
  this.setSide = function (n) {
    if (isNaN(n) !== true) {
      return (this.side = Math.abs(n));
    }
  };
}