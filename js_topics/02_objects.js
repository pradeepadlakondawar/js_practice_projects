// Possible way to create an object
const obj1 ={}  // object literal

const obj = {
    username: "pro"
}
console.log(obj);

// 2.
const obj2=Object.create(null)  // by using Object create method
console.log(obj2);

// 3.
function createObj(){
    this.name = "pro"
}
const obj3 =new createObj()   //  new keyword creates a new blank object 
console.log(obj3);

// 4.
class createObjUsingClass{
    constructor(){}
    a= 12
} 

const obj4= new createObjUsingClass();
console.log(obj4);