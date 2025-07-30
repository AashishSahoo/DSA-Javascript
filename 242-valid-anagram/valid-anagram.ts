function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length ) return false;
   let map = new Map<string , number>();

   for( let char of s){
      map.set( char , (map.get(char)?? 0)+1);
   }

   for( let char of t){
    if(!map.has(char)) return false
    map.set( char , map.get(char) -1 );
    if(map.get(char) <0) return false
   }
   return true;

};