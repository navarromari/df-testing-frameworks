const { assertEquals } = require(`../test-framework.js`); //destructuring assignment
const { countEvenNumbers } = require(`../scr/countEvenNumbers.js`);
function testCountEvenNumbers() {
    //Setup
    const testCases = {
        test1: {
            input: [1, 2, 3, 4, 5, 6],
            expected: 3,
            logMessage: `Test 1: [1,2,3,4,5,6] => 3`
        },
        test2: {
            input: [0, 1, 2],
            expected: 2,
            logMessage: `Test 2: [0,1,2] => 2`
        },
        test3: {
            input: [1, 3, 5],
            expected: 0,
            logMessage: `Test 2: [0,1,2] => 2`
        }
    }

    //Execute && Verify
    Object.entries(testCases).forEach(entry => {
        console.log(entry[1].logMessage);
        const actual = countEvenNumbers(entry[1].input);
        const result = assertEquals(actual, entry[1].expected);
        console.log(result);
    })

}

testCountEvenNumbers();