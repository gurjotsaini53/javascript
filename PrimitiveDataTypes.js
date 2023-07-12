// nn bb ss u -- primitive in js

let a = null;
let b  = 345 ; 
let c = true;
let d = BigInt("567") + BigInt("3"); 
let e  = "gurjot";
let f=Symbol("I am a nice programmer");
let g = undefined;
let h;
console.log(a ,b ,c ,d , e, f, g , h) ; 

console.log(typeof f);
console.log(typeof(f));

// non primitive in js - objects

const item = {
    "Name" : "Gurjot",
    "age": "20",
    "Branch":"CSE"
      
}

console.log(item["Name"]);
console.log(item["age"]);