type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let copy = [];
    let n= arr.length;

    for(let i=0;i<n;i=i+size){
        let temp =arr.slice(i,i+size);
        copy.push(temp);
    }
    return copy;
};
