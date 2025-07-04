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





/*let questions = [{category:"maths", question: "What is 2+2?",choices:["A.4","B.5","C.6"],answer:"A.4"},
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

console.log(selectedQuestion.hasOwnProperty("category"))*/

// Build a sentence Analy
// let Counter = (countFor,sentence)=>{
//   let count = 0;
//   for(let char of sentence){
//     if(countFor.includes(char.toUpperCase())){
//       count++
//     }
//   }
//    return count;
// }
// let sentenceAnalyzer = (sentence)=>{
//   let allCounts = `Vowels: ${Counter('AEIOU',sentence)}         Consonants: ${Counter('BCDFGHJKLMNPQRSTVWXYZ',sentence)}        Puntuations: ${Counter(",!.:'?;-",sentence)}`
//   return allCounts;
// }

// console.log(sentenceAnalyzer('PLOT 12, Gladys'))




// Builda factorial calculator


// implement a mutation algorithms
// function to check if a string is a palindrome


// chunky monkey algorithm
// function chunkArrayInGroups(arr, size) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d","e"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4], 3));

// implement the slice and splice methods
// build a password generator
// build an inventory management system
// Build a grade app
// Build a pyramid generator
// define a sum all numbers algorithms

const realBank = [
  {
    question: "When was the University of Lagos (UNILAG) established?",
    options: [
      "A. January 16, 1963",
      "B. November 5, 1962",
      "C. October 1, 1960",
      "D. December 12, 1991"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG was formally established by the Federal Government on November 5, 1962 before opening in January 1963."
  },
  {
    question: "On which date did UNILAG officially open to students?",
    options: [
      "A. November 5, 1962",
      "B. October 1, 1960",
      "C. January 16, 1963",
      "D. May 29, 1963"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "After being established in November 1962, UNILAG officially commenced academic activities on January 16, 1963."
  },
  {
    question: "Who served as UNILAG’s first Vice-Chancellor?",
    options: [
      "A. Professor Eni Njoku",
      "B. Professor Folasade Ogunsola",
      "C. Professor Ayodele Awojobi",
      "D. Professor Wole Soyinka"
    ],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Professor Eni Njoku was appointed the inaugural Vice-Chancellor upon UNILAG’s opening in 1963."
  },
  {
    question: "In which Lagos suburb is UNILAG’s Main Campus located?",
    options: [
      "A. Surulere",
      "B. Idi-Araba",
      "C. Akoka, Yaba",
      "D. Ikeja"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Main Campus occupies the Akoka area of Yaba in Lagos State."
  },
  {
    question: "Where is UNILAG’s second campus situated?",
    options: [
      "A. Epe",
      "B. Idi-Araba, Surulere",
      "C. Victoria Island",
      "D. Oshodi"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The College of Medicine and other facilities are on the Idi-Araba campus in the Surulere district."
  },
  {
    question: "Which foreign university initially affiliated with UNILAG for academic standards?",
    options: [
      "A. University of Oxford",
      "B. University of London",
      "C. Harvard University",
      "D. University of Cambridge"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "At inception, UNILAG modeled degree examinations and standards on those of the University of London."
  },
  {
    question: "How many faculties did UNILAG begin with?",
    options: [
      "A. Three",
      "B. Four",
      "C. Five",
      "D. Six"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The university started with the Faculties of Arts, Education, Law, and Science."
  },
  {
    question: "What was UNILAG’s motto in Latin?",
    options: [
      "A. Scientia Potentia Est",
      "B. Veritas et Virtus",
      "C. Facta non verba",
      "D. Lux et Veritas"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNILAG’s motto is \"Facta non verba\", meaning “In deed and in truth.”"
  },
  {
    question: "In what year did UNILAG celebrate its 50th anniversary?",
    options: [
      "A. 2010",
      "B. 2011",
      "C. 2012",
      "D. 2013"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Fifty years after its 1962 founding, UNILAG observed its Golden Jubilee in 2012."
  },
  {
    question: "What are UNILAG’s official colors?",
    options: [
      "A. Blue and White",
      "B. Green and Gold",
      "C. Green and White",
      "D. Red and Black"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNILAG’s emblem and branding prominently feature green and white, reflecting Nigeria’s national colors."
  },
  {
    question: "Who is UNILAG’s Vice-Chancellor as of 2025?",
    options: [
      "A. Professor Eni Njoku",
      "B. Professor Folasade Ogunsola",
      "C. Professor Ayodele Awojobi",
      "D. Professor Wole Soyinka"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Professor Folasade Ogunsola was appointed UNILAG’s Vice-Chancellor in 2021 and continues in office through 2025."
  },
  {
    question: "Approximately how many volumes does the UNILAG University Library hold?",
    options: [
      "A. 100,000",
      "B. 500,000",
      "C. Over 1,000,000",
      "D. Over 2,000,000"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNILAG’s main library collection exceeds one million volumes, making it one of Nigeria’s largest academic libraries."
  },
  {
    question: "How many faculties does UNILAG comprise today?",
    options: [
      "A. 8",
      "B. 10",
      "C. 12",
      "D. Over 13"
    ],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "Since its modest start with four faculties, UNILAG has grown to more than 13 faculties across diverse disciplines."
  },
  {
    question: "Where is UNILAG’s College of Medicine located?",
    options: [
      "A. Akoka",
      "B. Idi-Araba",
      "C. Surulere Main Campus",
      "D. Ikeja"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Idi-Araba campus houses the College of Medicine, University Teaching Hospital, and related health sciences facilities."
  },
  {
    question: "What is the approximate student population at UNILAG?",
    options: [
      "A. 20,000",
      "B. 35,000",
      "C. 55,000+",
      "D. 75,000+"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNILAG enrolls over 55,000 students across undergraduate and postgraduate programs."
  },
  {
    question: "Which annual literary event does UNILAG host?",
    options: [
      "A. Lagos Book Fair",
      "B. Lagos International Literary Festival",
      "C. Nigerian Writers Conference",
      "D. African Poetry Slam"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG’s Centre for Contemporary Art and Literature organizes the Lagos International Literary Festival each year."
  },
  {
    question: "During which Nigerian political era was UNILAG established?",
    options: [
      "A. Colonial era",
      "B. First Republic",
      "C. Second Republic",
      "D. Military rule"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG opened in 1963 during Nigeria’s First Republic (1963–1966)."
  },
  {
    question: "Which landmark building houses UNILAG’s academic senate?",
    options: [
      "A. Faculty of Science Hall",
      "B. Senate House",
      "C. Eni Njoku Auditorium",
      "D. University Chapel"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Senate House on Akoka campus is where UNILAG’s governing Senate meets for academic decisions."
  },
  {
    question: "Which of these disciplines was NOT among UNILAG’s original four faculties?",
    options: [
      "A. Arts",
      "B. Education",
      "C. Engineering",
      "D. Law"
    ],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNILAG initially had Arts, Education, Law, and Science. The Faculty of Engineering was added later."
  },
  {
    question: "UNILAG’s motto “Facta non verba” translates to:",
    options: [
      "A. Words not deeds",
      "B. Deeds not words",
      "C. Truth in action",
      "D. Knowledge is power"
    ],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Literally “Facta non verba” means “Deeds, not words,” often rendered as “In deed and in truth.”"
  },
  {
    question: "What is the name of UNILAG’s official academic newsletter?",
    options: ["A. UNILAG Herald", "B. Lagos Scholar", "C. UNILAG Monthly", "D. The Campus Mirror"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The UNILAG Herald is the university’s periodic academic newsletter highlighting research and campus news."
  },
  {
    question: "Which UNILAG faculty was established most recently?",
    options: ["A. Faculty of Environmental Sciences", "B. Faculty of Arts", "C. Faculty of Law", "D. Faculty of Science"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Faculty of Environmental Sciences is one of the newest, added to address growing ecological and planning studies."
  },
  {
    question: "What is the name of the central exam body at UNILAG responsible for Post-UTME?",
    options: ["A. JAMB", "B. Senate Examination Committee", "C. UNITRACK", "D. Internal Admissions Board"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "UNITRACK refers to UNILAG’s internal Post-UTME testing mechanism and placement screening."
  },
  {
    question: "Which course does NOT fall under UNILAG’s Faculty of Education?",
    options: ["A. Educational Management", "B. Science Education", "C. Law Education", "D. Business Education"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Law Education is not a recognized program; education courses include Sciences, Business, Languages, etc."
  },
  {
    question: "UNILAG’s Centre for Biodiversity Research is located in which campus?",
    options: ["A. Akoka Main Campus", "B. Idi-Araba Campus", "C. Distance Learning Campus", "D. Victoria Island Center"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Centre for Biodiversity Research operates within the Main Campus, focusing on ecological studies."
  },
  {
    question: "Which UNILAG facility provides on-campus housing for postgraduate students?",
    options: ["A. Post-Grad Hall I", "B. Yaba Hall", "C. Eni Njoku Hall", "D. Graduate Lodge"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Post-Grad Hall I is designated for postgraduate students’ accommodation on Akoka campus."
  },
  {
    question: "Which organisation accredits UNILAG’s law degree?",
    options: ["A. Council of Legal Education", "B. Nigerian Law Society", "C. Bar Council", "D. National Universities Commission"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Council of Legal Education accredits university law programs before graduates can attend Law School."
  },
  {
    question: "The UNILAG marshland reserve nearby the Main Campus is known for its:",
    options: ["A. Botanical gardens", "B. Mangrove ecosystem", "C. Desert research", "D. Savannah wildlife"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG’s adjacent marshland features a mangrove ecosystem, studied by environmental science students."
  },
  {
    question: "Which annual sports competition does UNILAG host among Nigerian universities?",
    options: ["A. Ashes Tournament", "B. Nigerian University Games (NUGA)", "C. Universities Marathon", "D. Lagos Inter-School Fest"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG participates in and occasionally hosts elements of the Nigerian University Games Association events."
  },
  {
    question: "What digital platform does UNILAG use for e-learning and course registration?",
    options: ["A. Blackboard", "B. Moodle", "C. Canvas", "D. SchoolOnline"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG adopted Moodle as its primary Learning Management System (LMS) for lectures and registrations."
  },
  {
    question: "Which IOC-certified sports facility is located on UNILAG’s campus?",
    options: ["A. Swimming Pool", "B. Gymnastics Arena", "C. Cricket Oval", "D. Skating Rink"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The UNILAG Olympic-size swimming pool is certified by national and regional sports bodies."
  },
  {
    question: "Which UNILAG alumni served as Nigeria’s Minister of Finance?",
    options: ["A. Ngozi Okonjo-Iweala", "B. Bola Tinubu", "C. Goodluck Jonathan", "D. Amina J. Mohammed"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Economist Ngozi Okonjo-Iweala, a UNILAG alumna, served twice as Nigeria’s Coordinating Minister for the Economy/Finance."
  },
  {
    question: "What is the maximum duration for a standard undergraduate degree at UNILAG?",
    options: ["A. Four years", "B. Five years", "C. Six years", "D. Seven years"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "While most programs are 4–5 years, allowances (e.g., repeats) can extend the maximum tenure to six years before compulsory withdrawal."
  },
  {
    question: "Which UNILAG professor won the Nobel Prize in Literature?",
    options: ["A. Wole Soyinka", "B. Chinua Achebe", "C. Naguib Mahfouz", "D. Ngũgĩ wa Thiong'o"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Nigerian writer Wole Soyinka, a former UNILAG scholar, received the 1997 Nobel Prize in Literature."
  },
  {
    question: "Which UNILAG faculty launched Nigeria’s first Petroleum Engineering program?",
    options: ["A. Faculty of Engineering", "B. Faculty of Science", "C. Faculty of Environmental Sciences", "D. Faculty of Arts"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Faculty of Engineering introduced the country’s pioneer Petroleum Engineering course."
  },
  {
    question: "What is the name of UNILAG’s student union government body?",
    options: ["A. Students’ Assembly", "B. UNILAG Student Council", "C. Student Union Government (SUG)", "D. Campus Democracy Forum"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The SUG is the elected body representing UNILAG students across all campuses."
  },
  {
    question: "Which UNILAG research center focuses on tropical diseases?",
    options: ["A. Centre for Tropical Veterinary Medicine", "B. Centre for Malaria Research and Vector Biology", "C. Centre for Climate Change and Health", "D. Centre for Agricultural Economics"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "This center advances research on malaria and vector control in tropical environments."
  },
  {
    question: "Which UNILAG alumni was Nigeria’s first female Vice Chancellor?",
    options: ["A. Grace Alele-Williams", "B. Dora Akunyili", "C. Ngozi Okonjo-Iweala", "D. Amina J. Mohammed"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Grace Alele-Williams, who earned her doctorate at UNILAG, became Nigeria’s first female Vice Chancellor at the University of Benin."
  },
  {
    question: "What is the time limit for completing UNILAG’s Postgraduate Diploma (PGD) program?",
    options: ["A. One year", "B. Two years", "C. Three years", "D. Four years"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "PGD programs at UNILAG must be completed within two academic sessions (two years max)."
  },
  {
    question: "Which UNILAG facility is dedicated to Information Technology and computer training?",
    options: ["A. UNILAG ICT Centre", "B. Computer Science Building", "C. Cybersecurity Hub", "D. Tech Innovation Lab"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The ICT Centre offers computer literacy courses, network services, and training for students and staff."
  },
  {
    question: "What is the name of the UNILAG campus located near the Lagos University Teaching Hospital (LUTH)?",
    options: ["A. Akoka Campus", "B. Idi-Araba Campus", "C. Yaba Campus", "D. Victoria Island Campus"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Idi-Araba Campus hosts the College of Medicine and is adjacent to LUTH."
  },
  {
    question: "Which UNILAG center is responsible for entrepreneurship development?",
    options: ["A. Centre for Development Studies", "B. Centre for Entrepreneurship and Skills Development", "C. Student Empowerment Hub", "D. Business Innovation Centre"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG established this center to support business and vocational skill training."
  },
  {
    question: "Which UNILAG facility is primarily used for student debates and cultural events?",
    options: ["A. Main Auditorium", "B. Multipurpose Hall", "C. Amphitheatre", "D. Lagoon View Hall"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Amphitheatre is frequently used for student-led events, cultural shows, and debates."
  },
  {
    question: "In which year was UNILAG established?",
    options: ["A. 1952", "B. 1960", "C. 1962", "D. 1970"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The University of Lagos was established in 1962 to serve as a center of excellence in education."
  },
  {
    question: "What does the acronym DLI stand for at UNILAG?",
    options: ["A. Directorate of Lagos Innovation", "B. Distance Learning Institute", "C. Department of Library and Information", "D. Digital Learning Initiative"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "DLI offers flexible academic programs for students unable to attend full-time classes."
  },
  {
    question: "Which UNILAG Vice Chancellor served during Nigeria’s COVID-19 pandemic response?",
    options: ["A. Prof. Rahamon Bello", "B. Prof. Oluwatoyin Ogundipe", "C. Prof. Folasade Ogunsola", "D. Prof. Babajide Alo"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Prof. Ogundipe was VC during the height of the COVID-19 pandemic, overseeing academic transitions."
  },
  {
    question: "What is the official UNILAG motto?",
    options: ["A. Knowledge is Light", "B. In Deed and In Truth", "C. Learning and Character", "D. Greatness in Unity"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "\"In Deed and In Truth\" encapsulates UNILAG’s commitment to integrity and action."
  },
  {
    question: "Which UNILAG faculty offers Urban and Regional Planning?",
    options: ["A. Faculty of Environmental Sciences", "B. Faculty of Science", "C. Faculty of Social Sciences", "D. Faculty of Law"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "Urban and Regional Planning is a key course in the Faculty of Environmental Sciences."
  },
  {
    question: "What is the name of the UNILAG student radio station?",
    options: ["A. Campus Wave FM", "B. Radio UNILAG", "C. 103.1 Voice FM", "D. Akoka Sounds"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Radio UNILAG 103.1 FM is managed by the Mass Communication department and students."
  },
  {
    question: "UNILAG is often referred to by what nickname among Nigerian universities?",
    options: ["A. Ivory Tower", "B. Alpha Varsity", "C. Great Akokites", "D. First Choice University"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "UNILAG is widely recognized as the \"First Choice\" university due to its prestige."
  },
  {
    question: "What is the name of the UNILAG Vice Chancellor as of 2023?",
    options: ["A. Prof. Oluwatoyin Ogundipe", "B. Prof. Rahamon Bello", "C. Prof. Folasade Ogunsola", "D. Prof. Babajide Alo"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Prof. Folasade Ogunsola is the first female Vice Chancellor in the history of UNILAG."
  },
  {
    question: "Which hall in UNILAG is exclusively for female undergraduate students?",
    options: ["A. Jaja Hall", "B. Queen Amina Hall", "C. Mariere Hall", "D. Moremi Hall"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "Moremi Hall is a female-only residence named after the legendary Yoruba heroine."
  },
  {
    question: "What year did UNILAG launch its first entrepreneurship fair?",
    options: ["A. 2010", "B. 2013", "C. 2015", "D. 2017"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The UNILAG Entrepreneurship Fair began in 2013 to showcase student businesses."
  },
  {
    question: "Which UNILAG hall is known for housing postgraduate and returning students?",
    options: ["A. Mariere Hall", "B. King Jaja Hall", "C. Henry Carr Hall", "D. Fagunwa Hall"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Henry Carr Hall provides accommodation mainly for postgraduates and final-year students."
  },
  {
    question: "The UNILAG Senate Building is how many stories tall?",
    options: ["A. 6", "B. 10", "C. 12", "D. 13"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The Senate Building is a prominent 13-storey structure housing administrative offices."
  },
  {
    question: "What is the primary function of the UNILAG Academic Planning Unit?",
    options: ["A. Student discipline", "B. Infrastructure development", "C. Curriculum design and evaluation", "D. Hostel allocation"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Academic Planning Unit oversees program development and academic evaluation."
  },
  {
    question: "Which UNILAG hall is known as the tallest male hostel?",
    options: ["A. King Jaja Hall", "B. Mariere Hall", "C. Biobaku Hall", "D. Saburi Biobaku Hall"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "King Jaja Hall is the tallest male student hostel in UNILAG."
  },
  {
    question: "The University of Lagos is located in which local government area?",
    options: ["A. Ikeja", "B. Surulere", "C. Shomolu", "D. Lagos Mainland"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The Akoka Main Campus is situated within the Lagos Mainland LGA."
  },
  {
    question: "UNILAG’s motto encourages students to act how?",
    options: ["A. With pride", "B. In word and deed", "C. In knowledge and honor", "D. In deed and in truth"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The university’s official motto is \"In Deed and In Truth.\""
  },
  {
    question: "Which UNILAG student body is responsible for academic and welfare advocacy?",
    options: ["A. SRC", "B. SUG Senate", "C. Faculty Representatives", "D. Student Union Government"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The SUG advocates for student rights and engages university authorities on academic and welfare matters."
  },
  {
    question: "What are the official colors of the University of Lagos?",
    options: ["A. Blue and White", "B. Green and White", "C. Red and Gold", "D. Black and Green"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "UNILAG’s colors mirror Nigeria’s national colors: green for growth and vitality, and white for purity and integrity."
  },
  {
    question: "Which of these elements appears on UNILAG’s coat of arms?",
    options: ["A. Lion and Shield", "B. Torch and Book", "C. Eagle and Globe", "D. Palm Tree and Scroll"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The coat of arms features a torch (symbolizing enlightenment) and a book (symbolizing knowledge)."
  },
  {
    question: "What background color is used on the University of Lagos flag?",
    options: ["A. White", "B. Green", "C. Blue", "D. Yellow"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The UNILAG flag has a green field with the university crest centered on it."
  },
  {
    question: "Who is the official visitor and ceremonial head of UNILAG?",
    options: ["A. Chancellor", "B. Vice-Chancellor", "C. Pro-Chancellor", "D. Senate President"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Chancellor is the titular head and represents the university at major functions; the Vice-Chancellor runs daily affairs."
  },
  {
    question: "Who serves as the chief academic and administrative officer of UNILAG?",
    options: ["A. Chancellor", "B. Vice-Chancellor", "C. Registrar", "D. Provost"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Vice-Chancellor oversees academic programs and administration, acting as the university’s executive head."
  },
  {
    question: "Which governing body appoints the Vice-Chancellor of UNILAG?",
    options: ["A. Senate alone", "B. Academic Board", "C. Council (Pro-Chancellor and Council)", "D. Student Union Government"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The University Council, chaired by the Pro-Chancellor, approves the VC appointment."
  },
  {
    question: "What is the role of the Pro-Chancellor at UNILAG?",
    options: ["A. Academic teaching", "B. Student affairs management", "C. Chairing the University Council", "D. Financial auditing"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Pro-Chancellor chairs the Council, overseeing policy decisions and governance."
  },
  {
    question: "Which of these is NOT part of the UNILAG coat of arms?",
    options: ["A. Waves representing Lagos Lagoon", "B. A torch", "C. An open book", "D. A castle turret"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The coat of arms includes waves (lagoon), torch, book, and palm fronds, but no turret."
  },
  {
    question: "What do the waves on UNILAG’s coat of arms symbolize?",
    options: ["A. Strength and resilience", "B. Lagos Lagoon and maritime heritage", "C. Academic excellence", "D. National unity"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The stylized waves represent the Lagos Lagoon and the city’s coastal identity."
  },
  {
    question: "Which official holds a deputy role to the Vice-Chancellor in academic matters?",
    options: ["A. Deputy Chancellor", "B. Deputy Vice-Chancellor", "C. Provost", "D. Dean of Faculties"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Deputy Vice-Chancellor assists the VC in academic and administrative responsibilities."
  },
  {
    question: "What symbol appears at the top of the UNILAG coat of arms?",
    options: ["A. An open book", "B. A palm tree", "C. A rising sun", "D. A torch"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The torch sits atop the crest, symbolizing the light of knowledge."
  },
  {
    question: "Which UNILAG official presides over Senate meetings?",
    options: ["A. Vice-Chancellor", "B. Chancellor", "C. Pro-Chancellor", "D. Registrar"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The VC chairs the Senate, which handles academic policies and standards."
  },
  {
    question: "On the UNILAG flag, where is the university crest positioned?",
    options: ["A. Top-left corner", "B. Center", "C. Bottom-right corner", "D. Diagonal stripe"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The crest is placed centrally on the green field of the flag for visibility."
  },
  {
    question: "Who is the custodian of UNILAG’s academic records and seals?",
    options: ["A. Bursar", "B. Registrar", "C. Librarian", "D. Dean of Students"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Registrar manages records, convocation documents, and the university’s official seal."
  },
  {
    question: "Which position is responsible for overseeing student housing and hostels?",
    options: ["A. Provost", "B. Bursar", "C. Dean of Student Affairs", "D. Chief Security Officer"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Dean of Student Affairs administers student welfare, including hostel allocations."
  },
  {
    question: "Which vice-chancellor initiated the expansion of UNILAG’s second campus?",
    options: ["A. Prof. Eni Njoku", "B. Prof. Folasade Ogunsola", "C. Prof. Oyewusi Ibidapo-Obe", "D. Prof. Oluwatoyin Ogundipe"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "Prof. Ogundipe led infrastructure upgrades at Idi-Araba during his tenure."
  },
  {
    question: "What does the open book on UNILAG’s crest represent?",
    options: ["A. Openness to all religions", "B. Academic pursuit and learning", "C. Government transparency", "D. Cultural heritage"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The open book is a universal symbol for education and scholarship."
  },
  {
    question: "Which officer is in charge of UNILAG’s financial management?",
    options: ["A. Registrar", "B. Bursar", "C. Vice-Chancellor", "D. Pro-Chancellor"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Bursar oversees budgeting, accounts, and financial controls for the university."
  },
  {
    question: "Which UNILAG official position is typically held by an alumnus or eminent public figure?",
    options: ["A. Registrar", "B. Chancellor", "C. Deputy Vice-Chancellor", "D. Dean of Faculty"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Chancellors are often distinguished alumni or respected public personalities appointed ceremonially."
  },
  {
    question: "Which body ratifies the appointment of the Pro-Chancellor?",
    options: ["A. Senate", "B. Academic Board", "C. Federal Government", "D. University Council"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "The University Council approves the Pro-Chancellor’s appointment and oversees university governance."
  },
  {
    question: "What feature of UNILAG’s coat of arms signifies the university’s Nigerian identity?",
    options: ["A. Green and white shield", "B. Golden lion", "C. Blue ribbon", "D. Red sun"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The shield’s green and white reflect Nigeria’s national colors and UNILAG’s patriotic roots."
  },
  {
    question: "Which symbol on the coat of arms indicates UNILAG’s commitment to research?",
    options: ["A. Palm fronds", "B. Torch flame", "C. Book pages", "D. Wavy lines"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The book denotes research, knowledge creation, and dissemination."
  },
  {
    question: "Which governing position does the UNILAG Pro-Chancellor hold concurrently?",
    options: ["A. Chair of the Senate", "B. Chair of the University Council", "C. Dean of the Faculty of Law", "D. Director of Academic Planning"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Pro-Chancellor is the Chair of the Council, guiding strategic decisions."
  },
  {
    question: "What does the motto “In Deed and In Truth” emphasize?",
    options: ["A. Verbal agreements", "B. Actions and honesty", "C. Scientific discovery", "D. International partnerships"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The motto underscores the importance of integrity (truth) and practical achievements (deeds)."
  },
  {
    question: "Who generally presides over UNILAG’s convocation ceremonies?",
    options: ["A. Vice-Chancellor", "B. Chancellor", "C. Registrar", "D. Pro-Chancellor"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Chancellor presides over convocations, conferring degrees ceremonially."
  },
  {
    question: "Which UNILAG official ensures compliance with university statutes and regulations?",
    options: ["A. Bursar", "B. Registrar", "C. Pro-Chancellor", "D. Dean of Student Affairs"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Registrar monitors adherence to academic and administrative regulations."
  },
  {
    question: "What national symbol is subtly incorporated into UNILAG’s coat of arms?",
    options: ["A. Eagle", "B. Star", "C. Nigerian map outline", "D. Coat of arms of Nigeria"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The crest includes contours reminiscent of the map of Nigeria, symbolizing national service."
  },
  {
    question: "Which body does the Vice-Chancellor report to directly?",
    options: ["A. Chancellor", "B. Senate", "C. University Council", "D. Student Union Government"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The VC is accountable to the Council, chaired by the Pro-Chancellor."
  },
  {
    question: "What special event is marked by hoisting the UNILAG flag at half-mast?",
    options: ["A. Independence Day", "B. Campus Founders’ Day", "C. Mourning the death of a high-ranking officer", "D. Convocation Day"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Flags are flown at half-mast to honor deceased senior officials or significant tragedies."
  },
  {
    question: "Which officer maintains the Master Seal of UNILAG?",
    options: ["A. Chancellor", "B. Registrar", "C. Vice-Chancellor", "D. Pro-Chancellor"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The Registrar safeguards the Master Seal, used to authenticate official documents."
  },
  {
    question: "Which ceremony involves the Chancellor, Vice-Chancellor, and Pro-Chancellor together?",
    options: ["A. Orientation Day", "B. Matriculation and Convocation", "C. Faculty Board meetings", "D. Academic Senate retreats"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Both matriculation (welcoming new students) and convocation (graduation) feature these dignitaries."
  },
  {
    question: "Who approves the design and updates to the UNILAG coat of arms?",
    options: ["A. Senate", "B. University Council", "C. Academic Board", "D. Student Union Government"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Modifications to the crest require Council approval for consistency with tradition."
  },
  {
    question: "Which of these titles is honorary at UNILAG?",
    options: ["A. Vice-Chancellor", "B. Bursar", "C. Chancellor", "D. Registrar"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "The Chancellor is honorary; day-to-day management is led by the Vice-Chancellor."
  },
  {
    question: "Which office issues the official UNILAG academic calendar?",
    options: ["A. Registrar", "B. Academic Planning Unit", "C. Bursar", "D. Dean of Students"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The APU produces and disseminates the yearly academic schedule."
  },
  {
    question: "Which UNILAG position oversees all faculty deans?",
    options: ["A. Chancellor", "B. Vice-Chancellor", "C. Pro-Chancellor", "D. Registrar"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "The VC provides leadership and coordination across all faculties and their deans."
  },
  {
    question: "What is flown alongside the UNILAG flag at official events?",
    options: ["A. Nigerian national flag", "B. African Union flag", "C. United Nations flag", "D. JAMB flag"],
    correctAnswer: "A",
    usersChoice: null,
    explanation: "The Nigerian flag is flown with the UNILAG flag to show national allegiance."
  },
  {
    question: "Which UNILAG official signs degree certificates?",
    options: ["A. Chancellor and Vice-Chancellor", "B. Chancellor and Pro-Chancellor", "C. Vice-Chancellor and Registrar", "D. Pro-Chancellor and Registrar"],
    correctAnswer: "C",
    usersChoice: null,
    explanation: "Degree parchments bear signatures of the VC and Registrar as official issuers."
  },
  {
    question: "What does the palm frond in the coat of arms represent?",
    options: ["A. Academic success", "B. Peace and prosperity", "C. Athletic prowess", "D. Environmental sustainability"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Palm fronds traditionally symbolize peace, victory, and prosperity."
  },
  {
    question: "Which position is UNILAG’s permanent representative to the Association of African Universities?",
    options: ["A. Vice-Chancellor", "B. Pro-Chancellor", "C. Registrar", "D. Director of International Affairs"],
    correctAnswer: "D",
    usersChoice: null,
    explanation: "This director liaises with continental university bodies and represents UNILAG at AAU."
  },
   {
    question: "What is the capital of Nigeria?",
    options: ["A. Lagos", "B. Abuja", "C. Enugu", "D. Ibadan"],
    correctAnswer: "B",
    usersChoice: null,
    explanation: "Abuja is the capital city of Nigeria."
  },
];


const allQuestions = [];
const questionBank = [...realBank];
function generateUserQuestions() {
  const usedIndexes = new Set();
  while (allQuestions.length < 40) {
    const index = Math.floor(Math.random() * questionBank.length);
    if (!usedIndexes.has(index)) {
      allQuestions.push({ ...questionBank[index] });
      usedIndexes.add(index);
    }
  }
  return allQuestions;
}

// console.log(generateUserQuestions())

const quiz = {
  title: "Maths",
  questions: [
    { q: "2+2", a: 4 },
    { q: "3*3", a: 9 }
  ]
};

const newQuiz = {
  ...quiz,
  questions: quiz.questions.map(q => ({
    ...q,
    answered: false
  }))
};












