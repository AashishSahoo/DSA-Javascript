function isAnagram(s: string, t: string): boolean {
    
    if(s.length !== t.length) return false;

    let sm=new Map();
    for(let char of s){
        sm.set( char , (sm.get(char) ||0)+1 );
    }


    for(let char of t){
        if(!sm.has(char))return false;

        sm.set(char ,sm.get(char)-1);
        if(sm.get(char)<0) return false;

    }
    return true;

};