/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function ConvertTemp(celsius){
    let result= (celsius * 9) / 5 + 32;
    return result;
}
// console.log(ConvertTemp(5));

/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*//* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/

function countOccurrences(numbers,target){
   let count=0;
   for(let i=0;i< numbers.length;i++){
    // console.log(numbers);
    if(numbers[i] === target){
        count++;
    }
   }
   return count;

}


// / Example usage
const numbers1 = [5, 6, 11, 12, 98, 5];
console.log(countOccurrences(numbers1, 5)); // Output: 2

const numbers2 = [5, 6, 11, 12, 98, 5];
console.log(countOccurrences(numbers2, 25)); // Output: 0



/*
Task-3:
Write a function to count the number of vowels in a string.
*/

function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase letters
    str = str.toLowerCase();
    
    // Initialize a counter to track the number of vowels
    let count = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count++;
      }
    }
  
    // Return the total count of vowels
    return count;
  }
  
  // Example usage
   console.log(countVowels("Programming")); // Output: 3 (o, a, i)
   console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
   console.log(countVowels("JavaScript"));  // Output: 3 (a, a, i)


/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function findLongestWord(str){
    const words = str.split(' ');
    console.log(words);
    let longestWord ='';
    for(let i=0; i<words.length;i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
            // console.log( longestWord )
        }
    }
    return longestWord

}





// / Example usage
const input = 'I am learning Programming to become a programmer';
console.log(findLongestWord(input)); // Output: Programming


/*
Task-5:
Generate a random number between 10 to 20.
*/

function getRandomNumber(){
    return Math.floor(Math.random()*(20-10 +1))+10;

}
// Example usage
console.log(getRandomNumber());


// To get a number between 10 and 20, we scale the random number:
// Math.random() * (20 - 10 + 1) gives a range from 0 to 10 (but not exactly 10).
// Adding 10 shifts the range from [0, 10) to [10, 20).

// The formula used is:
// Random Number
// =
// Math.floor(Math.random() * (max - min + 1)) + min
// Random Number=Math.floor(Math.random() * (max - min + 1)) + min
// For our case:
// Random Number
// =
// Math.floor(Math.random() * (20 - 10 + 1)) + 10
// Random Number=Math.floor(Math.random() * (20 - 10 + 1)) + 10


