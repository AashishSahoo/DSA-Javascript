function isPalindrome(x: number): boolean {
    let s : string = x.toString();
    let str : number = 0;
    let end : number = s.length-1; 
 
    while(str<end){
        if(s[str]!==s[end]){
            return false;
        }
        str++;
        end--;
        
    }
    return true;

};