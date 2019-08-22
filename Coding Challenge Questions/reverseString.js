var value = "!ah ah ogola esrever a si sihT";

/* My way of doing this out */
function reverse_first(value){
  var counter = value.length;
  var reverseString = "";
  while(counter >= 0){
    reverseString = reverseString + value.substring(counter - 1 ,counter);
    counter--;
  }
  return reverseString;
}

/* Little trick to envolve Array.reverse() function as helper ;) */
function reverse_second(value){
  var arr = value.split(""); /* This will split the string in array */
  arr.reverse();
  return arr.join(""); /* This will join and convert the array into string */

  /* space complexity of above can be improved
     return value.split("").reverse().join("");
     Here, look we have saved the space required for arr variable :)
  */

}

/* Just simple for loop and adding values in front :D */
function reverse_three(value){
  var reverseString = "";
  for (var char of value){
    reverseString = char + reverseString; /* Notice we are adding before in concat :D */
  }
  return reverseString;
}


console.log("first function result: " + reverse_first(value));
console.log("second function result: " + reverse_second(value));
console.log("third function result: " + reverse_three(value));
