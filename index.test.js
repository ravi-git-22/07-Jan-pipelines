const calculator = require('./index');

function testFunction(){
    const result = calculator.add(1,2);
    expect(result).toBe(3);
}

test('add two numbers and verify the result is correct',testFunction);