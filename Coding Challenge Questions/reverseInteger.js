/* Reversing a number is same as reversing a string
   However, it becomes trickier when negative number comes into play
*/

function reverseInteger(value){
  var reverse = value.toString().split("").reverse().join("");

  // if(value >= 0){
  //   return parseInt(reverse);
  // }else{
  //   return (parseInt(reverse) * -1 ); /* This will help in retaining the negative sign ;) */
  // }

  /* Note: To avoid above custom logic we can use math.sign(value) which return 1 if the number is
     positive and -1 if the number is negative
  */

  return (parseInt(reverse) * Math.sign(value));
}

console.log("Reverse attempt 1: " + reverseInteger(-123456789));
console.log("Reverse attempt 2: " + reverseInteger(56789));
