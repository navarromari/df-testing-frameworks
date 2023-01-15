function countEvenNumbers(input) {

    let evenNumbers = 0;

    input.forEach(num => {
        if (typeof num === `number` && num % 2 === 0) {
            evenNumbers++;
        }
    })

    return evenNumbers;
};

module.exports = {
    countEvenNumbers
};