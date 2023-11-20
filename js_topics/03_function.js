// what are HOF= higher order function

// the function which accepts the other functions as a parameter or returns a function are callled as higher order function

function fun1(inp) {
   return function (inp2) {
        console.log(inp+inp2);
    }
}
// const funResult = fun1(10);
// funResult(20)
fun1(10)(30);
