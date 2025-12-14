function longestCommonPrefix(strs: string[]): string {

     if( strs.length ===0) return "";
  if(strs.length ===1 ) return strs[0];
 
    strs= strs.sort();
    let a=strs[0];
    let b=strs[strs.length-1];

    let res="";
    for(let i=0;i<a.length;i++){
       if(a[i]===b[i]) res+=a[i];
       else break;

    }
    return res.length>1? res:"";
};