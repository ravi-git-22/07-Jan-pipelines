function addTwoNumbers(num1, num2){
    return num1+num2;
}

console.log(addTwoNumbers(1,2));

const calculator = {};
calculator.add = addTwoNumbers;
module.exports = calculator;