function isPalindrome(s: string): boolean {
    s= s.toLowerCase();
    let strArr = s.split("");
    strArr = strArr.filter((char) => /[a-z0-9]/.test(char) );
    s = strArr.join("");
    let i=0;
    let j= s.length -1;
    while( i<j){
        if( s.charAt(i) !== s.charAt(j)) return false

        i++;j--;
    }
    return true;
};