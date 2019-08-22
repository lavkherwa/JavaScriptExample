/* Palindrome is a string which form the same words if they're
   reversed
*/
var palindrome = "ACBABCA";

/* My version of code 1
   Why I go with this one first is because the time complexity is
   better here because as soon as we found that the char is not
   matching on the other side we break the look and come out ;)
   Time complexity --> log(n/2)
*/
function isPalindrome_first(value){
  var result = false;
  for(var char of value){
    if(char == value.substring(value.length - 1,  value.length)){
      result = true;
      value = value.substring(0, value.length - 1);
    }else{
      result = false;
      break;
    }
  }
  return result;
}

/* My code version 2
   Time complexity --> n
*/
/* Note: you can use array trick for reverse as well from the reverseString.js examples
   I avoid using ready made functions and therefore choose to go with below approach
*/
function isPalindrome_second(value){
  var reverse = "";
  for(var char of value){
    reverse = char + reverse;
  }
  return (value === reverse);
}

/* Again using array helper --> every() function
   This is Advanced using LAMBDA in js :O
*/
function isPalindrome_third(value){
  var arr = value.split("");
  return arr.every((currentValue, currentIndex) => {
    return currentValue === arr[arr.length - currentIndex - 1]; /* This is to find the mirror element */
  });
}


console.log("using first function for palindrome: " + isPalindrome_first(palindrome));
console.log("using second function for palindrome: " + isPalindrome_second(palindrome));
console.log("using third function for palindrome: " + isPalindrome_third(palindrome));
