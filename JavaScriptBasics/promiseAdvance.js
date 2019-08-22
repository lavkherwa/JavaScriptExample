/* using functions old style */
var promise1 = new Promise(function(resolve, reject){
  resolve("Done using functions");
});

promise1.then(function(data){
  console.log(data);
})

/* using lamda ES6 new style */
var promise2 = new Promise((resolve, reject) => resolve("Done using lamda"));
promise2.then((data) => console.log(data));



/* chaining the promises */
/* Still complicated as we're trying to do everything at once */
var promiseStart = new Promise((resolve, reject) => {
  resolve("Task 1 is done")
}).then((data) => {
  console.log(data + ", Time to promise task 2");
  return new Promise((resolve, reject) => {
      resolve("Task 2 is done");
  }).then((data) => {
    console.log(data + ", No further chaining")
  })
}).catch((data) => {
  console.log(data);
})


/* Chaining the promises */
/* Neat way of doing this ;) */
var prom1 = new Promise((resolve, reject) => resolve("task 1.0 is done"));
var prom2 = new Promise((resolve, reject) => resolve("task 2.0 is done"));
var prom3 = new Promise((resolve, reject) => resolve("task 3.0 is done"));

prom1.then((data) => {
  console.log(data);
  return prom2
}).then((data) => {
  console.log(data);
  return prom3
}).then((data) => {
  console.log(data)
}).catch((data) => {
  console.log(data)
});
