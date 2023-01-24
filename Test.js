//p-3 
let findPow =(n,p) =>{
    x= Math.pow(n,p)
     console.log(x)
}

//findPow(prompt(`Enter the number`,`Enter the power`))
findPow(2,3)

//findpow -2 

num= 2
pow= 3 
i=1 
let ans=0
while( i<pow){
ans+= num*num
i++
}

 console.log(ans)

// find pow-3
 const findPower=(num,pow)=>{
    let o
    let ans=0
    let mul
   for(o=1; o<pow;o++)
   {
    mul= num*num
    ans= ans+mul
   }
   return ans
 
 }
 console.log(findPower(2,3))
 

//p-4

//let str= prompt('Enter the array numbers')
/* let arr1= [2,4,5,3,3,3,4];
let arr2=[]
let k= 0

for (let i=0; i < arr1.length-1;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]!==arr1[j])

        {
            arr2[k]=arr1[i]
            k++
        }
       
    }


}
console.log(arr2) 

//
let array = [6, 9, 15, 6,13,6, 9, 11, 15];
let index = 0, newArr = [];
const length = array.length; // to get length of array
function findDuplicates(arr) {
   for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
      if (arr[i] !== arr[j]) {
            newArr[index] = arr[i];
            index++;
         }
      }
   }
   return newArr;
}
console.log(findDuplicates(array))
 */
// P-1
let getString= 'Aaab'
let finString=''
let h

const convertString=(getString)=>{

    for( let l of getString){
        h= l.charCodeAt()+1
        finString+= String.fromCharCode(h)
    }
    
    return finString 

}

console.log(convertString(getString))

//p-2 
let mainArr= [{Phase:"Phase1", Step:"Step1", Task:"Task1", Value:"5"},
{Phase:"Phase1", Step:"Step1", Task:"Task2", Value:"10"},
{Phase:"Phase1", Step:"Step2", Task:"Task1", Value:"15"},
{Phase:"Phase1", Step:"Step2", Task:"Task2", Value:"20"},
{Phase:"Phase2", Step:"Step1", Task:"Task1", Value:"25"},
{Phase:"Phase2", Step:"Step1", Task:"Task2", Value:"30"}]

let objMain={
    Phase_1: [],
    Phase_2:[]

};

const p1= mainArr.filter((item)=>{
    return item.Phase=== "Phase1"
})


//console.log(p3)
objMain.Phase_1.push(p1) 

const p2= mainArr.filter((item)=>{
    return item.Phase=== "Phase2"
})

//console.log(p2)
objMain.Phase_2.push(p2)

console.log(objMain)

//p-4 
let x = prompt('Enter the array of numbers')
let len= prompt('Enter the array size ')
let arraay=[]
for( let i=0;i<len;i++){
    arraay[i]=x[i]
}
let unique=''
const u= arraay.filter((x)=>{
    return arraay.indexOf(x)===arraay.lastIndexOf(x)
})
console.log(u)

//grid program
var hash = "#";
var space = ' ';
var size = 8;

for (var x = 1; x <= size; x++); {
  var line = ' ';

  for (var y = 1; y <= size; y++); {
    if (x % 2) {
      if (y % 2) {
        line = line + space;
      } else {
        line = line + hash;
      }
    } else {
      if (y % 2) {
        line = line + hash;
      } else {
        line = line + space;
      }
    }

  }

  console.log(line);
}
