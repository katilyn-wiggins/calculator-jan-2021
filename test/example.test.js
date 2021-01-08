// IMPORT MODULES under test here:
import { sumWhat, subWhat, multWhat, divWhat } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

//Addition 
test('it should return 8 when provided 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sumWhat(5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 27 when provided 25 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 27;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sumWhat(25, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Subtraction
test('it should return 8 when provided 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subWhat(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 27 when provided 30 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 27;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subWhat(30, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Multiplication 
test('it should return 8 when provided 2 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multWhat(2, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 27 when provided 9 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 27;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multWhat(9, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Division
test('it should return 8 when provided 16 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divWhat(16, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 27 when provided 81 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 27;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divWhat(81, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});