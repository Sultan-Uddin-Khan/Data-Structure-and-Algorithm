//Given a string returns the character that is most commnly used in the string
//time complexity Big O(n)
//space complexity O(n)
function maxChar(str){
  const charMap={}
  let max=0;
  let maxChar='';
  for (let char of str){
    charMap[char]=(charMap[char]||0)+1
  }
 for(let char in charMap){
    if(charMap[char]>max){
        max=charMap[char];
        maxChar=char;
    }
 }
  return maxChar
}
console.log(maxChar('apple'))

//Palindrome
function palindrome(str){
    //remove space and special character
    const normalizeStr=str.replace(/[\W_ ]/g, "");
    const palindromeStr=normalizeStr.split('').reverse().join('')
    if(normalizeStr===palindromeStr){
        return true
    }else{
        return false
    }
}
console.log(palindrome('not a palindrome'))

//Write a function that returns the number of vowel
let numberOfVowel=0;
const collectionVowels=['a','e','i','o','u']
function vowelNumber(str){
 for (let elm of str.toLowerCase()){
    if(collectionVowels.includes(elm)){
        numberOfVowel++
    }
 }
 return numberOfVowel;
}
console.log(vowelNumber('not a palindrome'))

//array chunking
function chunk(arr,size){
   const chunked=[];
   //Solution 1
//    for(let elm of arr){
//     const last=chunked[chunked.length-1];
//     if(last && last.length<size){
//         last.push(elm)
//     }
//     else{
//         chunked.push([elm]);
//     }
//    } 
   //Solution 02
   let index=0;
   while(index<arr.length){
   let newArr=arr.slice(index,index+size)
   chunked.push(newArr);
   index+=size;
   }
   return chunked;
}
console.log(chunk([1,2,3,4,5],2))