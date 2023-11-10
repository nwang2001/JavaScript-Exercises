// creates a function called expect that has a parameter of val
function expect(val) {

    // calling expect will return two functions toBe and notToBe
    return {

        // toBe function has a parameter otherVal
        toBe: function (otherVal) {

            // if val and otherVal is not equal, a error is thrown
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }

            // returns 'value: true' if the 'if statement' is not true
            return { "value": true };
        },

        // notToBe function has a parameter otherVal
        notToBe: function (otherVal) {

            // if val and otherVal is  equal, a error is thrown
            if (val === otherVal) {
                throw new Error("Equal");
            }

            // returns 'value: true' if the 'if statement' is not true
            return { "value": true };
        }
    }
}

// console logs the results of calling the functions
console.log(expect(5).toBe(5));
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(6));
console.log(expect(5).notToBe(null));