// a function that has i as a parameter
createMultiplier = (i) => {

    // returns a function with a parameter of n
    return function(n){

        // returns the multiplication result of i and n
        return i*n;
    }
}

// creates a variable equal to the function createMultiplier with a argument of 5
var multiplyByFive = createMultiplier(5);

// console log multiplyByFive with a argument of 7, will display 35
console.log(multiplyByFive(7));