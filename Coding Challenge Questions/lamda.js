var functionUsingLamda = input => console.log(input);

functionUsingLamda("Hello World, this is printed using lamda in javaScript");


var arr = [1,2,3,4,5,6];
/* reverse using new function */
console.log("Array is reversed using reverse function: " + arr.reverse().join(""));


var finalResult = arr.reduce((final, currentValue) => {
  if(currentValue > 0)
  final.push(currentValue);
  return final;
}, []);

console.log("This is through reduce function: " + finalResult.join(""));

var finalDecision = arr.every(function(currentValue){
  if(currentValue > 0)
  return true;
});

console.log("decision is : " + finalDecision);
