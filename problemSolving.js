//count the character
//input string-'hello' output={h:1,e:1,l:2,o:1}
//time complexity O(n)
//space complexity O(n)
function countCharacter(str){
    //creating an object for tracking down the value
    obj={};
    //make string lower case
     //ignore special character
     const normalizeStr=str.replace(/[^a-zA-Z ]/g, "").toLowerCase();
    //loop the input string
    for(let i=0;i<normalizeStr.length;i++){
     const char=normalizeStr[i];
     //ignore the space
     if(char===' ') continue
        obj[char]=(obj[char]||0)+1;
     
     //check if the element exist in the object for incrementing the count
     //1st Approach
     
// 2nd approach-
// char in obj ? obj[char]+=1 :obj[char]=1;
// 3rd Approach    
// if(char in obj){ 
//        obj[char]+=1
//      }
//      //if not present assign the value 1 
//      else
//      {
//         obj[char]=1;
//      }
    }
     return obj;  
  }
console.log(countCharacter('he $llo'))

//check the element of two array whether they are similar or not

function isElementExists(arr1,arr2){
    //1st Solution
    //time complexity O(n * n)
    //space complexity O(1) one variable
//     //declare flag variable
//     let exists=false;
//     //looping each element off array1
//     for(let elm of arr1){
//         //if match,loop will break and the function will return true;
//         if(arr2.includes(elm)){
//              exists=true;
//              break;
//         }
//     }
//    return exists;
//2nd Solution
//time complexity O(n+n)=O(2n)=O(n)
let frequencyElm={};
for (let elm of arr1){
    frequencyElm[elm]=true;
}
for (let elm of arr2){
    if(elm in frequencyElm){
        return true;
    }
}
}
console.log(isElementExists(['a','b','c'],[1,2,3,'a']))

//You have been given an array.You have to find minimum number
function min(arr){
   //Solution 01 
//    arr.sort((a,b)=>a-b)
//    return arr[0]
   //Solution 02
   return Math.min(...arr)
}
console.log(min([3,10,12,0,1]))

//You have been given an array.You have to find maximum number
function max(arr){
    //Solution 01 
    // arr.sort((a,b)=>a-b)
    // return arr[arr.length-1]
    //Solution 02
    //return Math.max(...arr)
    //Solution 03
    max_num=arr[0]
    for (let elm of arr){
        if(elm>max_num){
           max_num=elm
        }
    }
    return max_num;
 }
 console.log(max([3,10,12,0,1]))

 //reverse string
 function reverse(str){
    //Solution 01
    //return str.split("").reverse().join('')
    //Solution 02
     revStr=''
    // for(let i=str.length-1;i>=0;i--){
    //    revStr+=str[i]
    // }
    //Solution 03
    for(let char of str){
        revStr=char+revStr;
    }
    return revStr;
 }
 console.log(reverse('olleh'))

 //Reverse an Integer
function reverseInt(num){
    let reverseNum=num.toString().split('').reverse().join('')
    if(reverseNum.endsWith('-')){
        reverseNum='-'+reverseNum.slice(0,reverseNum.length-1)
    }
    return parseInt(reverseNum,10)
}
console.log(reverseInt(189))