// declares an array
var arr = [1, 2, 3];

// declares an empty array
var newArray = [];

// function to apply of math rule
const fn = function timesFour(n) {return n * 4};

// function to apply math rule to array
function map(ary, func) {
    ary.forEach(i => {
        newArray.push(func(i))
    });
};

// displays first and second array
map(arr, fn);
console.log(arr);
console.log(newArray);
