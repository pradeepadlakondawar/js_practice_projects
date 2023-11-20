//arrays


// foreach  - its a higher order function, it takes function as para
let arr=[1,2,3,4];

// arr.forEach(function(val){
//     // console.log(val);
//     // console.log(val*2);

//     console.log(`${val} : hello`);
// })


// arr.forEach(function(val){
//     if (val >= 2) {
//         console.log(val);
//     }
// })
// let sum = 0
// arr.forEach(function(val){
    
//     sum +=val
//     return sum

// })
// console.log(sum);

// let arr1=[1,2,'3',4]

// let sum=0;

// arr1.forEach(function(val){
//     if (typeof val === "number") {
//         sum += val
//     }
//     return sum
// })

// console.log(sum);


//interview ques - in this we get to know the diff of scopes in var and let
// let arr2=[]

// for (let i = 0; i < 10; i++) {
    
//     arr2.push(function () {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000)
//     })
// }

// for (let i = 0; i < 10; i++) {
//     arr2[i]();
    
// }


// let arr3 =[1,2,3,[4,5],6]


// // console.log(Array.isArray(arr3))
// function isArr (val){
//      console.log(Array.isArray(val));
// }

// isArr("wrte")

// //another way to check
// function isArr2(inp){
//     console.log(inp instanceof Array );
// }

// isArr2("rrr")


// clone an array  -- using spread operator

// let clonedArray=[]
// function cloning(inp) {
//    return clonedArray=[...inp];
// }
// cloning([1,2,3,[4,5]]);
// console.log(clonedArray);

// let arr4=[1,2,3,4];
// let arr5 = [...arr4]

// console.log(arr5);


//we will learn default paramater value
//we can use default parameter value, user not defines any value as para

// let emptyArr =[]
// function getter(inp , n=1){
//     for (let i = 0; i <n; i++) {
//        emptyArr.push(inp[i]);
//     }
//     // console.log(emptyArr);
//     return emptyArr;
// }

// // getter([1,2,3,4,5],5);
// console.log(getter([1,2,3,4,5]));



let arr6=["red","blue","white"]
let str ="";

//join property is used to join the array elements with any specified seperator

function joinAll(inp,char) {
   return  inp.join(`${char}`)
}

console.log(joinAll(arr6,"+"));
// joinAll(arr6,"+")




