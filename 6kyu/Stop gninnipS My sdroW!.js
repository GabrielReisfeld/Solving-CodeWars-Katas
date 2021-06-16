/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

    Strings passed in will consist of only letters and spaces.
    Spaces will be included only when more than one word is present.

Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"
*/

function spinWords(string){
    var array = string.split(' ');
    var res = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 4) {
        res.push(array[i].split('').reverse().join(''))
      } else {
        res.push(array[i]);
      }
    }
    return res.join(' ');
    // return words.split(' ').map(function (word) {
    //     return (word.length > 4) ? word.split('').reverse().join('') : word;
    //   }).join(' ');
  }