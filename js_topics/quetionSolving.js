// Q.1 
// Write a js program to write check two numbers and retrun true if one of the number is 100 or sum of the two numbers are hunderd.

// let sum =(a, b)=>{
//     if(a===100 || b=== 100 || (a+b) ==100 ){
//         return true
//     }
//     else return false;
// }

// let sum =(a,b)=> a===100 || b=== 100 || (a+b) ==100
// console.log(sum(10,900))


//Q.2
// write a program to check the file extension name

// let checkExtension=(inp)=>{
//     let ans =inp.split('.')
//     return ans[1]
// }

// const getFileExtension=(str)=>str.slice(str.lastIndexOf("."))
// console.log(getFileExtension("kjkjkj.html"));

//convert string to Array
// let str ="helloWorld"
// let arr=Array.from(str)

//convert array to string
// let arr = [1,2,3,4,5,6]
// console.log(arr.join());

// indexOf method
// let sentence = "Once upon a time there was a King"
// // console.log(sentence.indexOf("O"));
// console.log(sentence.lastIndexOf("a"));
// console.log(sentence.slice(sentence.lastIndexOf("a")));


//Q.3
// Write a program to replace every character in given string with char following it in the alphabate. example abcd => bcde

// let str ="abcd"
// let arr=Array.from(str)
// console.log(arr);
// console.log(str.charCodeAt(2));
// console.log(String.fromCharCode(99));

// let str ="abcd"
// approch remove the first element and add new element at end

// const ans =(str)=>{
//     // let lastval=str.charCodeAt(str.length-1);
//     let arr=Array.from(str);
//     arr.shift();
//     console.log(arr);
//     // let newval =String.fromCharCode(lastval+1)
    
//     let newval =String.fromCharCode((str.charCodeAt(str.length-1))+1)
//     arr.push(newval)
//     // console.log(arr);
//     let str1=arr.join("")
//     console.log(str1);
  
// }
// console.log(ans("bcde"));


//approch increae all element by adding 1
// let str ="abcd"
// let arr=str.split("");
// let mapArr=arr.map((val)=>{
//     return String.fromCharCode(val.charCodeAt(0)+1)
    
// })
// console.log(mapArr.join(''));

// inshort
// let moveCharForward=(str)=>{
//    return str
//     .split('')
//     .map(char=>String.fromCharCode(char.charCodeAt(0)+1)).join('')
// }
// console.log(moveCharForward("abcd"));


//Q.4
// get the current date in format
// mm-dd-yy , mm/dd/yy or dd-mm-yy , dd/mm/yy

// const date = new Date()
// console.log(date.toLocaleDateString());


// Q.5
// write a program to append "New!" infornt of given string. if already present just print the given string.

// const newString = (str)=>{
//     if (!str.includes("New!")) {
//         return `New! ${str}`
//     } else {
//         return str;
//     }
// }

// console.log((newString("hello world")));
// console.log((newString("New! hello world")));

// Q.6
// write a program to create new string using 1st 3 letters and last 3letters from the given string. if string lenght is less than 3 return the given string as it is.

// let ans = (str)=>{
//   if(str.length<3){
//     return str;
//   }else{
//     return `${str.slice(0,3)}${str.slice(str.length-3)}`
//   }
// }
// console.log(ans("abc123efg"));

// Q.7
// write a program to extract first half of string in even length-3

// let ans = (str)=>{
//   return str.slice(0,str.length/2);
// }
// console.log(ans("temp"));
// console.log(ans("temple"));
// console.log(ans("temples"));

// q,8
// write a program to concatinate two string by removing 1st char of both strings

// let ans = (str1,str2)=>{
//   return `${str1.slice(1)}${str2.slice(1)}`
// }
// console.log(ans("junior","developer"))


// Q.9
// Given Two values find which one is nearest to 100

// let ans =(num1,num2)=>{
//   if(100-num1 < 100-num2 || num1===100){
//     return num1
//   }else{
//     return num2
//   }
// }
// console.log(ans(100,102))


// q.10
// write a program to check a given string contains 2 or 4 occurance of given character

// let ans = (str, char)=>{
//   if(str.split(char).length>2 && str.split(char).length<6 ) {
//     return true
//   }
//   return false
// }

// console.log(ans("ooh","o"))








