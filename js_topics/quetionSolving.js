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

const newString = (str)=>{
    if (!str.includes("New!")) {
        return `New! ${str}`
    } else {
        return str;
    }
}

console.log((newString("hello world")));
console.log((newString("New! hello world")));




