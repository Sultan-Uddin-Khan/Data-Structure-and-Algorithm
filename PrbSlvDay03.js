//frequency counter
//time complexity O(n^2)
//space complexity O(1)
function isSame(arr1,arr2){
  //Solution 1  
//   if(arr1.length!==arr2.length) return false;
//   for(let i=0;i<arr1.length;i++){
//    let index=arr2.indexOf(arr1[i])
//    if(index===-1)return false;
//    else{
//     arr2.splice(index,1);
//    }
//    return true;
//   }

//Solution 2
//time complexity O(n)
//space complexity O(n+m)
const hashTable1={};
const hashTable2={}
for(let num in arr1){
hashTable1[num]=(hashTable1[num]||0)+1
}
for(let num in arr2){
    hashTable2[num]=(hashTable2[num]||0)+1
    }
 for (let elm in hashTable1){
    if(!elm in hashTable2 || hashTable1[elm]!==hashTable2[elm]){
        return false
    }   
 } 
 return true;  
}
console.log(isSame([1,2,4,5],[1,4,5,2]))

//Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSums(nums, target) {
    //Solution 01
    //time complexity O(n^2)
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //       if(nums[i]+nums[j]===target){
    //         return ([i,j])
    //       }
    //     }
    // }
    //Solution 2
    const hashTable={};
    for(let i=0;i<nums.length;i++){
        const want=target-nums[i];
        if(want in hashTable){
            return [hashTable[want],i] 
        }
        hashTable[nums[i]]=i;
    }
};
console.log(twoSums([2,7,11,15],13))

//SubArray Sum
function subarraySum(nums, k) {
    let hashMap={0:1};
    let sum=0;
    let result=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if([sum-k] in hashMap){
          console.log(result+=hashMap[sum-k])
        } 
        console.log(hashMap[sum]=(hashMap[sum]||0)+1);
    }
    return result;
};

//console.log(subarraySum([1,1,1],2))
console.log(subarraySum([1,2,3],3))

//Anagram
function anagrams(stringA,stringB){
    const normalizeStringA=stringA.replace(/[^\w]/g,'').toLowerCase();
    const normalizeStringB=stringB.replace(/[^\w]/g,'').toLowerCase();
    const frequency1={};
    const frequency2={};
    for(let elm of normalizeStringA){
        frequency1[elm]=(frequency1[elm]||0)+1
    }
    for(let elm of normalizeStringB){
        frequency2[elm]=(frequency2[elm]||0)+1
    }
    if(Object.keys(frequency1).length!==Object.keys(frequency2).length) return false;

    for (let key in frequency1){
        if(frequency1[key]!==frequency2[key] || !(key in frequency2)){
             return false;
        }    
    }
    return true;
}
console.log(anagrams('a','ab'))
