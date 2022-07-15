//Big(O)
//how number of operation increases/decreases with input
//Best case(omega)
//average case(theta)
//worst case (O)

//Big(O)=O(n)
function log(n){
    let count=0;
   for(let i=0;i<n;i++){
     count++;
     console.log(i);
   }
   console.log(count);
}
log(12);

//Big(O)=O(n^2)
//2n=n
function log1(n){
    let count=0;
   for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      count++;
     console.log(i,j);  
    } 
   }
   console.log(count);
}
log1(3);

//Big(O)=O(2n)
function log2(n){
    let count=0;
   for(let i=0;i<n;i++){
      count++;
     console.log(i);  
   }
   for(let i=0;i<n;i++){
    count++;
   console.log(i);  
 }
   console.log(count);
}
log2(3);



//Big(O)=O(n^3)
function log1(n){
    let count=0;
   for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            count++;
            console.log(i,j,k);   
        }
    } 
   }
 console.log(count);
}
log1(3);


//0(1) best case
//O(n) worst case
function logAtleast5(n){
    let count=0;
  for(var i=1; i<=Math.max(5,n);i++){
    count++;  
    console.log(i);
  }
  console.log(count)
}
logAtleast5(5)


//0(1) best case
//O(n) worst case
function logAtleast6(n){
    let count=0;
  for(var i=1; i<=Math.min(5,n);i++){
    count++;  
    console.log(i);
  }
  console.log(count)
}
logAtleast6(6)


//O(n+n)=O(2n)=O(n)
function log3(a,b){
    for(let i=0;i<a;i++){
        console.log(a)
    }
    for(let j=0;j<b;j++){
        console.log(b)
    }
}
log3(3,5)

//O(1)-O(logn)-O(n)

