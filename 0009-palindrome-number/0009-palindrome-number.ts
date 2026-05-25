function isPalindrome(x: number): boolean {
      let s= x.toString();
      
      let arr = s.split("");

      let i=0;
      let j=arr.length-1;

      while(i<j){
        if(arr[i]!==arr[j]) return false;
        else {
            i++;
            j--;
        }
      }
      return true;
};