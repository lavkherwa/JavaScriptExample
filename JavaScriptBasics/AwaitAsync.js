function getDetails(input){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({"details": input});
    }, 2000);
  }
  )
};


/* Resolving with THEN (PROMISES) */
getDetails("Here is your details from THEN")//
.then(details => {console.log(details)})


/* Resolving with ASYNC AWAIT (PROMISES) */
async function getDetailsAsync(){
  const details = await getDetails("Here is your details from ASYNC AWAIT");

  console.log(details);
}

// request data
getDetailsAsync();
