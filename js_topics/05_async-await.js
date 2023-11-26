//  async?


// const p = new Promise(function(resolve,reject){
//   resolve("promise resolveed value")
// })

// async function getData(){
//   //this async fuc=tion always returns a promise
//   // either you can return promise or can return a value
//   // if you return a value, js will automatically wrap this value in promise and then returns it as a promise
//   // return "value"
//   return p
// }

// const dataPromise= getData()
// console.log(dataPromise)

// // now how do yo get the oringala data from dataPromise
// dataPromise.then((res)=>console.log(res))


// await - 
// await is a keyword only can be used inside the async function
//  await will resolve the promise

// async and await combo is used to handle the promises.

// const p = new Promise(function(resolve,reject){
//   resolve("promise resolveed value")
// });

// how do we use promise before asya await

// function getData(){
//   p.then(res=>console.log(res))
// }
// getData()



// using async await

// async function handlePromise(){
//   const promiseValue = await p;
//   console.log(promiseValue);
// }
// handlePromise()



// ********************************
//  difference in async await and normal promiseValue


// const p = new Promise(function(resolve,reject){
//   setTimeout(function() {
//     resolve("promise resolveed value")
//   }, 3000);
// });

// function getData(){
//   // js engine will not wait for promise to be resolved , it will move on to the next 
//   p.then(res=>console.log(res))
//   console.log("namaste js")
// }
// getData()


// async function handlePromise(){
  
//   // js engine was waiting for promise to resolve and once the promise is resolved then it goes to next line to execute
//   const promiseValue = await p;
//   console.log("namaste javascript")
//   console.log(promiseValue);
// }
// handlePromise()


// ****************************** real worldexample
const apiUrl ="https://api.github.com/users/pradeepadlakondawar";
async function handlePromise(){
  
  const fetchedUrl = await fetch(apiUrl);
  // fetch funcion is basically a promise , after resolve it gives you response 
  // fetch()=> response.jason() => responseVal
  //  this response .jason is agaun a promise, after it get resolved it giver jason valus
  
  const jasonVal = await data.jason();
  
  console.log(fetchedUrl)
}

handlePromise()


// error handling

async function handlePromise(){
  
  try {
    const fetchedUrl = await fetch(apiUrl);
  const jasonVal = await data.jason();
    console.log(fetchedUrl)
  } catch (e) {
    console.log(e)
  }
  
  
}

handlePromise()
// handlePromise().catch((err)=>console.log(err)); // another way for handling error






















