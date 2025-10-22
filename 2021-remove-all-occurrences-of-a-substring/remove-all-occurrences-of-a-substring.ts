function removeOccurrences(s: string, part: string): string {


    let finalStr = s;

  while (finalStr.includes(part)) {
    let idx = finalStr.indexOf(part); // find where the part starts
    finalStr =
      finalStr.slice(0, idx) + finalStr.slice(idx + part.length); // remove it
  }

  return finalStr;
    // while(s.includes(part)){
    //    s=s.replace(part,"");
    // }

    // return s;

    
};