// what are HOF= higher order function

// the function which accepts the other functions as a parameter or returns a function are callled as higher order function

// function fun1(inp) {
//    return function (inp2) {
//         console.log(inp+inp2);
//     }
// }
// // const funResult = fun1(10);
// // funResult(20)
// fun1(10)(30);


//call
//call k help se ham function ko run krte samay function k andr this ki value kya rahegi decide kr sakte hai.
let obj1 ={username:"pro"}

function call1(inp) {
    console.log(this);
}
// call1()
call1.call(obj1)