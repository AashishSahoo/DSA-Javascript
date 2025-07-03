function mostCommonWord(paragraph: string, banned: string[]): string {

    paragraph = paragraph.toLowerCase().replace(/[^a-z]/g, " ");
    const words = paragraph.split(/\s+/);
    const bannedSet = new Set(banned);
    const countMap =  new Map<string , number>();

    let maxCount =0;
    let result ="";

    for ( const word of words){
        if(word && !bannedSet.has(word)){
            const count = (countMap.get(word) || 0) +1;
            countMap.set(word, count);

            if(count > maxCount){
                maxCount =count;
                result =word;
            }
        }
    }

    return result;
};