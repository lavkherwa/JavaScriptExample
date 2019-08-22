/* Array example - any values */
console.log("Array Run");
let myArray = [];
myArray.push("221");
myArray.push("22ddd");
myArray.push("221dds");
myArray.push("221ddwws");

for(let result of myArray){
  console.log(result);
}
console.log("\n");

/* Map example - key/value pair */
console.log("Map Run");
let myMap = new Map();
myMap.set("1","Lav");
myMap.set("2","Kush");
myMap.set(null, "Mani"); // null or undefined is also possible

for(let [key, value] of myMap){
  console.log("key is: " + key + ", Value is " +  value);
}
console.log("\n");

/* Set example - Unique values (Similar to Array) */
console.log("Set Run");
let mySet = new Set();
mySet.add("Lav");
mySet.add("Lav");
mySet.add("Kush");

for(let result of mySet){
  console.log(result);
}
