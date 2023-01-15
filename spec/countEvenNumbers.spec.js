const { assertEquals } = require(`../test-framework.js`); //destructuring assignment
const { countEvenNumbers } = require(`../scr/countEvenNumbers.js`);
//Setup
console.log(`Test 1: [1,2,3,4,5,6] => 3`);
let input = [1, 2, 3, 4, 5, 6];
let expected = 3;

//Execute
let actual = countEvenNumbers(input);

//Verify
let result = assertEquals(actual, expected);
console.log(result);

////////////////////////Test 1 end

//Setup
console.log(`Test 2: [0,1,2] => 2`);
input = [0, 1, 2];
expected = 2;

//Execute
actual = countEvenNumbers(input);

//Verify
result = assertEquals(actual, expected);
console.log(result);

////////////////////////Test 2 end

//Setup 
console.log(`Test 3: [1,3,5] => 0`);
input = [1, 3, 5];
expected = 0;

// Execute 
actual = countEvenNumbers(input);

//Verify

result = assertEquals(actual, expected);
console.log(result);

////////////////////////Test 3 end