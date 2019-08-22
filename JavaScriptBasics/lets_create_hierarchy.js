var topNode = {
  name: "topnode",
  cid: "1",
  children: []
}


for(var i=0; i<3; i++){
  var firstLevelNode = {
    name: "immediate child to topnode - " + i,
    cid: i + 1,
    children: [] /* Here goes the hierarchy for each node that will be created seperately */
  }
  topNode.children.push(firstLevelNode);
}


console.log(JSON.stringify(topNode));
