// let x = " Hello, World! ";
// console.log(x[6]); // Output: ","
// console.log(x[20]); // Output: undefined
// //Using strings methods effectively
// console.log(x.includes("w")); // Output: "false"
// console.log(x.includes("W")); // Output: true
// console.log(x.includes("m")); // Output: "false"
// console.log(x.includes("World")); // Output: "True"
// console.log(x.indexOf("World")); // Output: 8
// console.log(x.indexOf("i")); // Output: -1
// console.log(x.lastIndexOf("o")); // Output: 9
// console.log(x.lastIndexOf("l")); // Output: 11
// console.log(x.startsWith("Hello")); // Output: false
// console.log(x.startsWith(" ")); // Output: true
// console.log(x.startsWith("World")); // Output: false
// console.log(x.endsWith("!")); // Output: false
// console.log(x.endsWith("")); // Output: true 
// console.log(x.endsWith("World")); // Output: false
// console.log(x.length); // Output: 15
// console.log(x.charAt(0)); // output: " "
// console.log(x.charAt(20)); // Output: ""
// console.log(x.charCodeAt(0)); // Output: 32
// console.log(x.charCodeAt(20)); // Output: NaN
// console.log(x.toUpperCase()); // Output: " HELLO, WORLD! " 
// console.log(x.toLowerCase()); // Output: " hello, world! "
// console.log(x.trim()); // Output: "Hello, World!"
// console.log(x.trimStart()); // Output: "Hello, World! "
// console.log(x.trimEnd()); // Output: " Hello, World!"
// console.log(x.replace("World", "Universe")); // Output: " Hello, Universe! "
// console.log(x.replace(/o/g, "0")); // Output: " Hell0, W0rld! "
// console.log(x.split(" ")); // Output: [ 'Hello,', 'World!' ]
// console.log(x.split(" ").length); // Output: 4
// console.log(x.split("o")); // Output: [ ' Hell', ', W', 'rld! ' ]
// console.log(x.split("o").length); // Output: 3
// console.log(x.split('')); // Output: [ ' ', 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ' ]
// console.log(x.split('').length); // Output: 15
// console.log(x.slice(0, 5)); // Output: " Hell"
// console.log(x.slice(7, 12)); // Output: " Worl"
// console.log(x.slice(7)); // Output: " World! "
// console.log(x.slice(-6)); // Output: "orld! "
// console.log(x.slice(7, -1)); // Output: " World!"
// console.log(x.substring(0, 5)); // Output: " Hell"
// console.log(x.substring(7, 12)); // Output: " Worl
// console.log(x.substring(7)); // Output: " World!"
// console.log(x.substring(-6)); // Output: "Hello, World! "
// console.log(x.substring(7, -1)); // Output: "Hello, World! "
// console.log(x.substr(0, 5)); // Output: " Hell"
// console.log(x.substr(7, 5)); // Output: "World"
// console.log(x.substr(7)); // Output: "World! "
// console.log(x.substr(-6)); // Output: "World! "
// console.log(x.substr(7, -1)); // Output: ""
// console.log(x.concat(" How are you?")); // Output: " Hello, World!  How are you?"
// console.log(x.concat(" How are you?").length); // Output: 28
// console.log(x.repeat(2)); // Output: " Hello, World!  Hello, World! "
// console.log(x.repeat(0)); // Output: ""
// // console.log(x.repeat(-1)); // Output: error: RangeError: Invalid count value
// console.log(x.repeat(1.5)); // Output: " Hello, World!  "
// console.log(x.padStart(20, "*")); // Output: "***** Hello, World! "
// console.log(x.padEnd(20, "*")); // Output: " Hello, World! *****"
// console.log(x.padStart(20, "0")); // Output: "00000 Hello, World! "
// console.log(x.padEnd(20, "0")); // Output: " Hello, World! 00000"
// console.log(x.padStart(10, "0")); // Output: " Hello, World! "
// console.log(x.padEnd(10, "0")); // Output: " Hello, World! "
// console.log(x.match(/o/g)); // Output: [ 'o', 'o' ]
// console.log(x.match(/o/)); // Output: [ 'o', index: 5, input: ' Hello, World! ', groups: undefined ]
// console.log(x.match(/z/g)); // Output: null
// console.log(x.match(/Hello/)); // Output: [ 'Hello', index: 1, input: ' Hello, World! ', groups: undefined ]
// console.log(x.search(/World/)); // Output: 8
// console.log(x.search(/z/)); // Output: -1
// console.log(x.search(/Hello/)); // Output: 1
// console.log(x.search(/o/g)); // Output: 5
// console.log(x.search(/o/)); // Output: 5
// console.log(x.search(/z/g)); // Output: -1
// console.log(x.search(/Hello/)); // Output: 1
// console.log(x.split(" ").join("-")); // Output: "Hello,-World!"
// console.log(x.split(" ").join("")); // Output: "Hello,World!"
// console.log(x.split(" ").join("_")); // Output: "Hello,_World!"
// console.log(x.split(" ").join(" ")); // Output: "Hello, World! "
// console.log(x.split(" ").join("  ")); // Output: "Hello,  World! "
// console.log(x.split(" ").join("   ")); // Output: "Hello,   World! "
// console.log(x.split(" ").join("    ")); // Output: "Hello,    World! "
// console.log(x.split(" ").join("     ")); // Output: "Hello,     World! "
// console.log(x.split(" ").join("      ")); // Output: "Hello,      World! "
// console.log(x.split(" ").join("       ")); // Output: "Hello,       World! "
// console.log(x.split(" ").join("        ")); // Output: "Hello,        World! "
// console.log(x.split("").join("-")); // Output: " -H-e-l-l-o-,-- -W-o-r-l-d-! -"
// console.log(x.split('').join("a")); // Output: " aHaealalaoa,a, aWaoarlad! a" 

// let checkforVowel = (str) => {
//     return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
// };
// let Vowelchecker = (str) => {
//     let vowels = str.match(/[aeiouAEIOU]/g);
//     return vowels ? vowels.length : 0; 
// }
// console.log(Vowelchecker("rgtsrf"));

// let consonantChecker = (str) => {
//     let consonants = str.match(/[^aeiouAEIOU\s\d\W]/g);
//     return consonants ? consonants.length : 0;
// }
// console.log(consonantChecker("rgtsrf!@")); // Output: 6

// let vandCChecker = (str) => {
//     let vowels = str.match(/[aeiouAEIOU]/g);
//     let consonants = str.match(/[^aeiouAEIOU\s\d\W]/g);
//     return {
//         vowels: vowels ? vowels.length : 0,
//         consonants: consonants ? consonants.length : 0
//     };
// };
// console.log(vandCChecker("rgtsrf!@")); // Output: { vowels: 0, consonants: 6 }



// Write a function that keeps summing numbers passed in as arguments until a 0 is encountered, then returns the total.
// Example:
// addUntilZero(5, 7, -2, 0, 10); // Output: 10
// function addUntilZero(...args) {
//     let total = 0;
//     for (let num of args) {
//         if (num === 0) break;
//         total += num;
//     }
//     return total;
// }
// console.log(addUntilZero(5, 7, -2, 0, 10)); // Output: 10

//Converter from base 10 to base n
// function baseConverter(convert, n) {
//     if (n < 2 || n > 36) {
//         throw new Error("Base must be between 2 and 36");}
//     if (convert === 0) return "0";
//     let result = "";
//     while (convert > 0) {
//         let remainder = convert % n;
//         if (remainder < 10) {
//             result = remainder.toString() + result;
//         } else {
//             result = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + result;
//         }
//         convert = Math.floor(convert / n);
//     }
//     return +result;
// }
// console.log(typeof(baseConverter(10, 2))); // Output: "1010"

// // Arithemetic Operation in different bases
// let baseArithemetic = (n,arithemetic,...numbers)=>{
//     if("add".toLocaleLowerCase===arithemetic){
//             let Add = (...numbers)=>{
//                 let total = numbers[0];
//                 for(let i of numbers){
//                 total +=i}
//             return total-numbers[0]
//             } 
//             return baseConverter(Add,n)
//     }
//     else if("multiply".toLocaleLowerCase = arithemetic){
//         let multiply = (...numbers)=>{
//             let total = numbers[0];
//             for(let i of numbers){
//                 total *=i}
//                 return total/numbers[0]
//             } 
//             return baseConverter(multiply,n)
//     }
// }

// console.log(baseArithemetic(3,"add",1,2,4))


// // let baseConverter = (convert,n)=>{
// //     while(convert>=0){
// //         convert%n
// //         convert = Math.floor(convert/n);
// //     }
// // }

// Factorial of a number using recursion
// function factorial(n) {
//     if (n < 0) return "Factorial is not defined for negative numbers";
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120

// // Factorial of a number using iteration
// function factorialIterative(n) {
//     if (n < 0) return "Factorial is not defined for negative numbers";
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialIterative(0)); // Output: 1

// a function that removes the vowels in a string. using for of loop
// let removeVowels = (str) => {
//     let vowels = "aeiouAEIOU";
//     let result = "";
//     for (let char of str) {
//         if (!vowels.includes(char)) {
//             result += char;
//         }
//     }
//     return result;
//   }
//   console.log(removeVowels("Hello World")); // Output: "Hll Wrld"

// A loop that counts the number of numeric values in an array
//   let mix = [true, 100, "hello", 50, false, 42];
//   let count = 0;
//   for(let element of mix) {
//     if (typeof element === 'number' ) {
//       count++;
//     }
//   }
//   console.log(count); 


// Strings reversal with for of loop
// let stringReversal = (word)=>{
//   let wordArray = []
//   for(let char of word){
//     wordArray.push(char)
//   }
//   console.log(wordArray.reverse().join(''))
// }

// stringReversal("Communication")

// let scores = [80, 95, 70, 60, 100];
// let elementGreaterThan75 = [];
// for(let element of scores){
//     if(element>=75){
//         elementGreaterThan75.push(element)
//     }
// }
// console.log(elementGreaterThan75);

// Merge the elements of two arrays into one array. so that the length of the new array is the sum of the lenth of each arry that formed it. using loop only
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [];
// for (let i = 0; i < array1.length; i++) {
//     mergedArray.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//     mergedArray.push(array2[i]);
// }

// Given a string s, find the length of the longest substring without duplicate characters
// let lengthOfLongestSubstring = (s) => {
//     let charSet = new Set();
//     let left = 0;
//     let maxLength = 0;

//     for (let right = 0; right < s.length; right++) {
//         while (charSet.has(s[right])) {
//             charSet.delete(s[left]);
//             left++;
//         }
//         charSet.add(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//     return maxLength;
// };
// // if(mergedArray.length%2==0)

// const str = "paul";
// const chars = [];

// for (const ch of str) {
//   chars.push(ch);
// }

// const name = "Daebnyadaddadaddadadaddadaddad";
// const len= name.length;
// const arr = [];
// const mid = Math.floor(len / 2);

// if((len % 2) === 0) {
//     arr.push(name[(mid-1)], name[mid]);
// }
// else{
//     arr.push(name[mid]);
// }

// console.log(arr);


// const name = "Daebnyadaddadaddadadaddadaddad";
// const len= name.length;
// const arr = [];
// const mid = Math.floor(len / 2);

// if((len % 2) === 0) {
//     arr.push(name[(mid-1)], name[mid]);
// }
// else{
//     arr.push(name[mid]);
// }

// console.log(arr);


// function pickRandomChar(str) {
//   if (typeof str !== 'string' || str.length === 0) {
//     return []; // Handle empty or invalid input
//   }

//   const randomIndex = Math.floor(Math.random() * str.length);
//   const arr = [str[randomIndex]];
//   return arr;
// }







// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = array1.concat(array2);
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergedArray.length); // Output: 6





// // Using template literals


//   if (mix.every(item => typeof item === 'number')) {
//     count++;
//   }





let questions = [{category:"maths", question: "What is 2+2?",choices:["A.4","B.5","C.6"],answer:"A.4"},
{category:"biology", question: "The basic unit of  life is?",choices:["life","cell","biology"],
answer:"cell"},{category:"maths", question: "8*8 is__",choices:["46", "78","64"],answer:"64"},
{category:"maths", question: "Which of these is a perfect square?",choices:["50","49","72"],
answer:"49"},{category:"biology", question: "Soil best for cultivation is__",
choices:["loamy","sandy","clay"],answer:"loamy"}];

let getRandomQuestion = (questions)=>{
  const randIndex = Math.floor(Math.random()*questions.length)
  return questions[randIndex]
}

let selectedQuestion = getRandomQuestion(questions);
let selectedQuestionChoice = selectedQuestion.choices;
let selectedQuestionAnswer = selectedQuestion.answer;

let getRandomComputerChoice =(selectedQuestionChoice)=>{
  const answerIndex = +selectedQuestionChoice.indexOf(selectedQuestionAnswer);
  return `The correct answer is ${selectedQuestionChoice[answerIndex]}`;
}

console.log(selectedQuestion.hasOwnProperty("category"))

// Build a sentence Analyzer





// Builda factorial calculator


// implement a mutation algorithms
// function to check if a string is a palindrome


// chunky monkey algorithm
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}





