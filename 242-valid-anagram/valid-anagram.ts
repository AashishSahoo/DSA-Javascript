function isAnagram(s: string, t: string): boolean {
//   for( let i=0;i<  t.length;i++ ){
//       if(!t.includes(s.charAt(i)) ){
//         return false;
//       }
//   }
//   return true;
  return s.split('').sort().join('') === t.split('').sort().join('');



};