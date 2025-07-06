function longestCommonPrefix(strs: string[]): string{
  if( strs.length ===0) return "";
  if(strs.length ===1 ) return strs[0];

  strs =strs.sort();
  let result:string ="";
  for(let i=0;i<strs[0].length;i++ ){
    if( strs[0].charAt(i) === strs[strs.length-1].charAt(i) ){
        result += strs[0].charAt(i);
    }else {
        return result;
    }
  }
  return result;

};