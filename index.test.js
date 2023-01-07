const calculator = require('./index');

function testAddFunction(){
    const result = calculator.add(1,2);
    expect(result).toBe(3);
}

function testSubFunction(){
    const result = calculator.sub(4,3);
    expect(result).toBe(1);
}

function testMultFunction(){
    const result = calculator.mult(2,3);
    expect(result).toBe(6);
}

function testDivFunction(){
    const result = calculator.div(10,5);
    expect(result).toBe(2);
}

test('add two numbers and verify the result is correct',testAddFunction);
test('Subtract two numbers and verify the result is correct',testSubFunction);
test('Multiply two numbers and verify the result is correct',testMultFunction);
test('Divide two numbers and verify the result is correct',testDivFunction);