/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

/**
 * argumentsLength(1, 2, 3); // 3
 */



let argumentsLength = (... args)=>{
    return args.length;
}

//  let count = argumentsLength().length;