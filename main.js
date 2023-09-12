// 
/*
Question 1
1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments 
and returns the largest of them. Use the if-then-else construct available 
in JavaScript. Do some Googling to figure this out if you forget how conditionals work.
*/ 
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const result = maxOfTwoNumbers(5, 10);
console.log(result); 




/*
Question 2.
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Example usage:
const maxResult = maxOfThree(5, 10, 7);
console.log(result);




/*
Question 3. 
3. Write a function `isCharacterAVowel` that takes a character (i.e., a string of length 1) 
and returns true if it is a vowel and false otherwise.
*/ 
function isCharacterAVowel(char) {
  char = char.toLowerCase();

  return ['a', 'e', 'i', 'o', 'u'].includes(char);
}
console.log(isCharacterAVowel('a')); 
console.log(isCharacterAVowel('E')); 
console.log(isCharacterAVowel('b')); 

/*
Question 4.
4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` 
should return 10, and `multiplyArray([1,2,3,4])` should return 24.
*/ 
function sumArray(arr) {
    if (!Array.isArray(arr)) {
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
    return sum;
  }
    function multiplyArray(arr) {
    if (!Array.isArray(arr)) {
    }
  
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        product *= arr[i];
      }
    }
    return product;
  }
  
  // Example usage:
  const sumResult = sumArray([1, 2, 3, 4]);
  const multiplyResult = multiplyArray([1, 2, 3, 4]);
  
  console.log('Sum:', sumResult);
  console.log('Multiply:', multiplyResult);


/*
Question 5

5. Write a function that returns the number of arguments passed to the function when called.
*/ 
function countArguments(){
  return arguments.length;
}

const numberOfArguments = function(){
}
console.log(countArguments());



/*
Question 6

6. Define a function `reverseString` that reverses a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".
*/ 
const reverseString = function reverseString(str){
  let charArray = str.split('');
  let reversedArray = charArray.reverse();
  let reversedStr = reversedArray.join('');
  return reversedStr;
}
const originalString = "jag testar";
const reversedString = reverseString(originalString);
console.log(reversedString)


/*
Question 7

7. Write a function `findLongestWord` that takes an array of words and returns the 
length of the longest word in the array.
*/ 
function findLongestWord(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}
const wordsArray = ["computer", "banana", "pillow", "jump"];
const longestLength = findLongestWord(wordsArray);
console.log("The length of the longest word is:", longestLength); // Output: 6


/*
Question 8

8. Write a function `filterLongWords` that takes an array of words and a number `i` 
and returns a new array of words that are longer than `i` characters long.
*/ 
function filterLongWords (words, i) {
    const longWords = words.filter(word => word.length > i);
    return longWords;
  }
  
  const wordArray = ["apple", "banana", "orange", "watermelon", "rasberry"];
  const minLength = 5;
  const wordResult = filterLongWords(wordArray, minLength);
  
  console.log(result);



// Bonus 1
/*
**Bonus**
For this bonus, you'll have to do some research on objects.

1. Write a function that takes a string as an argument and returns an object where:

  - The keys are the characters that occur in the string.
  - The values are the number of occurrences for each letter, regardless of the case.

For example, calling the function with the string "General Assembly" will return:

```javascript
{
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
```
*/


function countCharacterOccurrences(inputString) {
  const charOccurences = {};

  const lowercaseString = inputString.toLowerCase();

  for (const char of lowerCaseString) {
      if (charOccurences[char]) {
        charOccurences[char]++;
      }
  } else {
    charOccurences[char] = 1;
  }
}