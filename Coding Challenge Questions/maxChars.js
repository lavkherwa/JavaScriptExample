var string = 'aaaauuuuuuuuuuu';


var findMaxChar = (input) => {
  var charMap = {};
  /* Loop and keep everything in a MAP with number of occurence count */
  for(var char of input){
    if(charMap.hasOwnProperty(char)){
      charMap[char] = charMap[char] + 1;
    }else{
      charMap[char] = 1;
    }
  }

  /* Iterate and get the max occurance value */
  return Object.keys(charMap).reduce((final, currentKey, currentIndex) => {
      if(final < charMap[currentKey])
      final = charMap[currentKey];
      return final;
  }, 0)
}

console.log(findMaxChar(string));
