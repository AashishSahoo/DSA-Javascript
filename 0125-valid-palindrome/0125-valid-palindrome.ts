function isPalindrome(s: string): boolean {
    s=s.toLowerCase();
    let strArr= s.split("");
    let str= strArr.filter((char)=> /[a-z0-9]/.test(char));
    // str=str.join("");
   let i=0;
   let j=str.length-1;
    while(i<j){
        if(str[i]!== str[j])return false;
        i++;j--;
    }
    return true;
};