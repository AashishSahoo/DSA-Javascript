function restoreString(s: string, indices: number[]): string {

let result:string[]=new Array(s.length);
    for(let i=0;i<indices.length ;i++){
       result[indices[i]]= s[i];
    }

    return result.join("");
};