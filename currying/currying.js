// simple example of sum of two numbers
// function sum(num1, num2) {
//     return num1+num2;
// }


// function sum(num1, num2, num3) {
//     return num1+num2+num3;
// }

// currying sum functions
function sum(num1) {
    function sum2(num2) {
        return function(num3) {
            return num1+num2+num3;
        }
    }
    return sum2;
}

const sum2 = sum(5);
const ans = sum2(4);
console.log("Ans is: ", ans(2));