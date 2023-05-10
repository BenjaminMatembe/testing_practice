const stringLengthModule = require('./functionsToTest/stringLength.js');
const reverseStringModule = require('./functionsToTest/reverseString.js');
const calculator = require('./functionsToTest/calculator.js');
const capitalize = require('./functionsToTest/capitalize.js');

// tests for task 1;

describe('stringLength', () => {
  test('the string length', () => {
    const anyString = 'benjamin';
    const anyStringLength = stringLengthModule.stringLength(anyString);
    expect(anyStringLength).toEqual(8);
  });

  test('string length less than 1', () => {
    const string = '';

    expect(() => stringLengthModule.stringLength(string)).toThrow(
      'string length is less than 1',
    );
  });
});

// task 2 test;

test('check for reverse of string', () => {
  const string = 'eye';
  expect(reverseStringModule.reverseString(string)).toMatch(/eye/);
});

// task 3 test

describe('calculator', () => {
  const a = 5;
  const b = 5;

  const samplingExample = new calculator.Calculator();

  test('adding a and b to get 10', () => {
    const answer = samplingExample.add(a, b);

    expect(answer).toEqual(10);
  });

  test('subtracting a and b to get 0', () => {
    const output = samplingExample.subtract(a, b);

    expect(output).toEqual(0);
  });

  test('dividing a and b to get 1', () => {
    const log = samplingExample.divide(a, b);

    expect(log).toEqual(1);
  });

  test('multiplying a and b to get 25', () => {
    const output = samplingExample.multiply(a, b);

    expect(output).toEqual(25);
  });
});

test('Capitalise first letter in string', () => {
  const string = 'benjamin';
  expect(capitalize.capitalizeString(string)).toMatch(/Benjamin/);
});