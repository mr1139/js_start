// 7 primitive data types in js
let n = 33.33;
console.log(n)
console.log(typeof n);

let firstName = 'Rahil';
console.log(firstName);
console.log(typeof firstName);

let isValue = (n === firstName)
console.log(isValue);
console.log(typeof isValue);

let sName = null;

let Hello;
console.log(Hello);

console.log(Number.MAX_SAFE_INTEGER);

let bigNumber = 110101010101010101010101010101101010110999n;
console.log(typeof bigNumber);

let bigSecondNumber = BigInt(1090909090909090909090909090909);
console.log(typeof bigSecondNumber);

let Person1 = {
    fName : "Rahil",
    age : null
}
let a = Symbol("newFirstName");
let b = Symbol("newSecondName");
Person1["a"] = "my name is Rahil";
console.log(Person1["a"]);
console.log(Object.keys(Person1));

for (let _key in Person1) {
    console.log(_key);
    console.log(Person1[_key]);
}

let map = new Map();
map.set("key" , "alana");
console.log(map.get("key"));

let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits){
    console.log(fruit);
}

let bName = 'Amaan';
for(let char of bName){
    console.log(char);
}