/* Promises can be your best friends when dealing with ASYNC calls
   in Scripts, It is a cood subsitute to callbacks which result in nasty
   and complecated code to understand, below is a simple example for resolving
   single/all promises.
*/

/* This is how you create a promise (WHEN)*/
var promise1 = new Promise(function(resolve, reject){
  return resolve("hello");
});
var promise2 = new Promise(function(resolve, reject){
  return resolve("world");
});

/* This is what you do when a promise is resolved or rejected (THEN)*/
promise1.then(function(value){
  console.log("successfully resolved: " + value);
}).catch(function(value){
  console.log("Rejected - error happened: " + value)
});

promise2.then(function(value){
  console.log("successfully resolved: " + value);
}).catch(function(value){
  console.log("Rejected - error happened: " + value)
});

/* Scenario when you want all the promises to be resolved */
Promise.all([promise1, promise2]).then(function(values){
  console.log("All promises resolved");
  for (var value of values){ /* When all promises resolve then only it comes here */
    console.log("promise is: " + value);
  }
}).catch(function(value){
    console.log("One or more promises failed to resolve");
    console.log(value); /* As soon as any promise fails it comes here */
})




/* We always wan't to do something in acceptable range
   else we will proceed with something else, below is a example
   of promise chaining ;)
*/
var timeoutPromise1 = new Promise((resolve, reject) => {
  var timeOut = setTimeout(() => {
      // setting timeout of 5 seconds
      resolve("Task 1 completed")
    }, 5000)
  });
var timeoutPromise2 = new Promise((resolve, reject) => {
  var timeOut2 = setTimeout(() => {
      // setting timeout of 5 seconds
      resolve("Task 2 completed")
    }, 10000)
  });

timeoutPromise1.then((result) => {
  console.log(result);
  return timeoutPromise2;
}).then((result) => {
  console.log(result);
}).catch((result) => {
  console.log("Failed :" + result);
})
