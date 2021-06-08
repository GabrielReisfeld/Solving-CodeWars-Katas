/*
Overview

Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.
Task:

Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

    The word should not begin with the letter "I", for example Inspire.
    The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
    The first letter should not be lowercase, for example road.

If the word does not meet the rules, we return "Invalid word".
*/

function i(word) {
    var array = word.split('')
    var first = array[0]
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowel = 0;
    var consonant = 0;
    for (let i = 0; i < array.length; i++) {
      if (vowels.includes(array[i].toLowerCase())) {
        vowel += 1;
      } else {
        consonant += 1;
      }
    }
    if (word === '' || first === 'I' || vowel >= consonant || first.match(/[a-z]/)){
      return 'Invalid word';
    }
    array.unshift('i')
    return array.join('')
  }