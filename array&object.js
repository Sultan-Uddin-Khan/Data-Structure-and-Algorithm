arr=['a','b','c']
arr.push('d')//Time complexity O(1)
console.log(arr)
arr.pop()//Time complexity O(1)
console.log(arr)
arr.unshift('z')//Time complexity O(n) because all elements index are changed here
console.log(arr)
arr.shift('z')//Time complexity O(n)
console.log(arr)
//finding element of an array
for (let item of arr){ //Big O(n)
    if(item==='c'){
        console.log(true)
    } 
}
//forEach,map,filter,reduce,slice,splice in all cases Big O(n)

//Object

const obj={
    name:'Sultan',
    age:33
}
//accessing element O(1)
console.log(obj.name)
console.log(obj['name'])
//adding element O(1)
obj.profession='programmer'
console.log(obj)
//delete element O(1)
delete obj.profession
console.log(obj)
//searching elememt O(n)
for (let key in obj){
    console.log(obj[key])
}
//Searching element O(1) 
console.log('age'in obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))

//When to use array
  //If order is important
  //search element using index
  //add or remove element in the last position
//When to use object
  //If order is not important
  // need faster access and removal

