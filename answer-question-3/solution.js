function findFirstStringInBracket(str) {
    let resultString = '';
  
    if (!str.length) return resultString;
  
    const splitInitialBracket = str.split('(');
  
    if (splitInitialBracket.length > 1) {
      const splitEndOfBracket = splitInitialBracket[1].split(')')[0];
        splitEndOfBracket.length > 1 ? resultString =  splitInitialBracket[1].substr(0, splitInitialBracket[1].indexOf(')')) : null;
        return resultString;
    } 
  
    return resultString;
}