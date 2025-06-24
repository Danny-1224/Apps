// let vowels = 'AEIOU'
// let vowelsCount = 0;
// let getVowelCount = (sentence)=>{
//   for(let char of sentence){
//      if(vowels.includes(char.toUpperCase())){
//        vowelsCount+=1
//      }   
//   }
//   return vowelsCount;
// }

// console.log(getVowelCount("Apples are tasty fruits"))
// console.log(getVowelCount("A"))

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));