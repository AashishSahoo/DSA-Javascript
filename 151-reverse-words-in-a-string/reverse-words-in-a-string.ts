function reverseWords(s: string): string {

    s= s.trim();
    let str:string[]= s.split(/\s+/);
    let i=0;
    let j= str.length-1;

    while( i<j){
        let temp= str[i];
         str[i] = str[j];
         str[j]=  temp;
         i++;j--;
    }

    let result = str.join(" ");
    return result;

//   let result = [];
//   let word = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s.charAt(i) !== ' ') {
//       word = s.charAt(i) + word;
//     } else if (word.length > 0) {
//       result.push(word);
//       word = "";
//     }
//   }
//   if (word.length > 0) result.push(word); 
//   return result.join(" ");


}
