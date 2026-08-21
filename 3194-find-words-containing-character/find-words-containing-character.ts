function findWordsContaining(words: string[], x: string): number[] {
    let res= [];

    for (let i=0;i< words.length;i++){
        let a= words[i];
        if(a.includes(x)){
            res.push(i);
        }
    }
    return res;
};