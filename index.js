function addTwoNumbers(num1, num2){
    return num1+num2;
}

function subTwoNumbers(num1, num2){
    return num1-num2;
}

function multTwoNumbers(num1, num2){
    return num1*num2;
}

function divTwoNumbers(num1, num2){
    return num1/num2;
}

const calculator = {};
calculator.add = addTwoNumbers;
calculator.sub = subTwoNumbers;
calculator.mult = multTwoNumbers;
calculator.div = divTwoNumbers;
module.exports = calculator;