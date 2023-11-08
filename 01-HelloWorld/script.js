// nested function that returns 'Hello World'
function createHelloWorld() {
    return function(){
        return 'Hello World';
    }
}

// initialize variable linked to createHelloWorld function
const f = createHelloWorld();

// console log function 
console.log(f());
console.log(f({}, null, 42));