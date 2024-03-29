let m = [1,2,3,4,5,6, "hh", "9",80,100];

let m2 = m.filter((m) => typeof m === "number");

console.log(m2);

let mSquared = m2.map((m) )




///Cau 10

let str = " High knowledge, high return";
let str2 = str.split(" ");
console.log(str2);

let str3 = str2.filter((str2) => str2 !== "");

str4 = str 3.map((str3) => str3.toLowerCase());
console.log(str4);




////Cau 11

class Student extends People { 
    constructor(name, age, address, id, math, physical, chemistry){
        super(name, age, address)
    }
}