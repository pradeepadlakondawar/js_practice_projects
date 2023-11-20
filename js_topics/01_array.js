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

let arr1=[1,2,'3',4]

let sum=0;
arr1.forEach(function(val){
    if (typeof val !== "string") {
        sum += val
    }
    return sum
})

console.log(sum);