let vowels = 'AEIOU'
let vowelsCount = 0;
let getVowelCount = (sentence)=>{
  for(let char of sentence){
     if(vowels.includes(char.toUpperCase())){
       vowelsCount+=1
     }   
  }
  return vowelsCount;
}

console.log(getVowelCount("Apples are tasty fruits"))
console.log(getVowelCount("A"))