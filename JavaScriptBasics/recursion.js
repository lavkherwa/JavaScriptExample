/* Sample source JSON */
let jsonObj = [{
    "globalId":"01",
    "name" : "name1",
    "children" : [{
      "globalId" : "02",
      "name" : "name2",
      "children" : [{
          "globalId" : "03",
          "name" : "name3"
        }]
     }]
  }];

/* MAP for globalId to sId*/
let gobalIdTosIdMap = new Map();
gobalIdTosIdMap.set("01", "sId-1");
gobalIdTosIdMap.set("02", "sId-2");
gobalIdTosIdMap.set("03", "sId-3");

/* WARNING: This will only work as long as flat data is sorted */
let counter = 0;
function prepareHierarchyData(jsonObj){
  /* Loop through nodes */
  for(let obj in jsonObj){
    /*  Check if globalId is present add sId */
    if (jsonObj[obj].hasOwnProperty("globalId")){
      jsonObj[obj].sId = gobalIdTosIdMap.get(jsonObj[obj].globalId);
    }
    /* Recursively call down the tree */
    if(jsonObj[obj] != null && jsonObj[obj] instanceof Object){
      /* Increment the counter by 1 and add to cId */
      jsonObj[obj].cId = ++counter;
      prepareHierarchyData(jsonObj[obj]);
    }
  }
}

/* Call to prepare hierarchy data */
prepareHierarchyData(jsonObj);

console.log(JSON.stringify(jsonObj));
