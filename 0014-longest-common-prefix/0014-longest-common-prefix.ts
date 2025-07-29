function longestCommonPrefix(strs: string[]): string{
  if(strs.length === 0 ){
    return ""
  }
  if(strs.length ===1){
    return strs[0];
  }

   strs = strs.sort();
   let prefix = "";
   let check = true;
   let i=0;
   let j=0;
   while(true){
    if(strs[0].charAt(i) === strs[strs.length -1].charAt(j)){
        prefix +=strs[0].charAt(i) ;
        i++;
        j++;
    }else if(strs[0].charAt(i) !== strs[strs.length -1].charAt(j)){
        break;
    }
   }
   return prefix;

};