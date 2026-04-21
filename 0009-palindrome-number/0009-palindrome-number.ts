function isPalindrome(x: number): boolean {
    let arr=x.toString();

    // let arr= x.split("");
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]!==arr[j]) return false;
        i++;
        j--;
    }

    return true;
    
};