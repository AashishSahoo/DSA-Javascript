function reverseStr(s: string, k: number): string {
    let arr= s.split("");
    for(let i=1; i<s.length; i+= 2*k){
    
      let jPointer=(i+k-2);
      let iPointer=i-1;
      while(jPointer>iPointer){
        let c =arr[iPointer];
        arr[iPointer++]=arr[jPointer];
        arr[jPointer--]=c;
      }
    }
    return arr.join("");
};