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
function baseConverter(convert, n) {
    if (n < 2 || n > 36) {
        throw new Error("Base must be between 2 and 36");}
    if (convert === 0) return "0";
    let result = "";
    while (convert > 0) {
        let remainder = convert % n;
        if (remainder < 10) {
            result = remainder.toString() + result;
        } else {
            result = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)) + result;
        }
        convert = Math.floor(convert / n);
    }
    return result;
}

// let baseConverter = (convert,n)=>{
//     while(convert>=0){
//         convert%n
//         convert = Math.floor(convert/n);
//     }
// }



// Using template literals


