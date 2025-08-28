
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */



 function createHelloWorld(){
    return function(){
        return "Hello World";
    }
 }