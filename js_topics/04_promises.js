const cart =["shoes", "pant","curtas"];

// createOrder(cart); // let this an api calling for creating order, it is taking cart items as input, in reult it is giving us the orderId. api will always retrun us the promise so we have to store this promis in another vairabile
const promise = createOrder(cart);
// console.log(promise)

// proceedToPayment(orderID);// now from createOrder it takes orderID as input

promise.then(function(orderID){
  console.log(orderID)
  return orderID
  // proceedToPayment(orderID);
})
.then(function(orderID){
  return proceedToPayment(orderID);
})
.then(function(paymentInfo){
  console.log(paymentInfo)
})
.catch(function(err){ // this error handling if promise is not resolved then we have to throw error to the user
  console.log(err.message)
})

// now we will create a promise

function createOrder(cart){
  const pr = new Promise(function(resolve, reject){
    
    // validate cart
    //logic to createOrder
    //orderID
    
    //validateCard
    if (!validateCart(cart)) {
      const err =new Error("Cart is not valide") // throwing an error if cart is not validated and rejecting the promise
      reject(err); // reject the promisw
      
    }
    
    // [logic for createOrder]
    const orderID = "12345" // dummy orderID
    if(orderID){
      setTimeout(function() {resolve(orderID);}, 3000); // making personal dealy 
    }
  });
  
  
  
  return pr
  
}

function validateCart(cart){
  return true;
  // return false; // check rejection
}

function proceedToPayment(orderID){
  // 
  return new Promise(function(resolve,reject){
    resolve("Payment successful")
  })
}
