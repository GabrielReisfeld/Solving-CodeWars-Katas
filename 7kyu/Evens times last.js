/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

function evenLast(numbers) {
    var res = 0;
    for (let i = 0; i < numbers.length; i++) { // (let i = 0; i < numbers.length; i += 2)
      if (i % 2 === 0){
        res += numbers[i]
      }
    }
    return res * numbers.slice(-1) // return sum * numbers[numbers.length - 1];
  }