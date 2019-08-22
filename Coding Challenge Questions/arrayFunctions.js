var arr = [1,2,3,4,-5];

/* it's an iterator which iterate through and take value in the final
   first argument is the one which will be returned and second is the current iterator value
*/
/* SAMPLE: SUM of numbers */
var value = arr.reduce((finalValue, currentValue, currentIndex) => {
  return finalValue = finalValue + currentValue;
/* IF the type is not defined auto type will be picked based on the object
   also we can provide additional initial values to start with in the final variable ;)
*/
}, 0);
console.log(value);

/* SAMPLE: list of all positive values in given array */
var arr = arr.reduce((finalValue, currentValue) => {
    if(currentValue > 0){
      finalValue.push(currentValue);
    }
   return finalValue;
/* Note that we provided the [] to indicate that the return type is array,
   also we can provide additional initial values to start with in the final variable ;)
*/
},[]);
console.log(arr.toString());


/* Every can be used if you want to iterate and evaluate a condition
   first argument is the current value and second is the current index
*/
/* SAMPLE: Check if all the element in array are integers */
var isPositive = arr.every((currentValue, currentIndex) => {
  if(currentValue > 0)
   return true;
});
console.log(isPositive);
