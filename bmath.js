var bmath = {};

bmath.toBint = function(decimal) {
    const [integerPart, fractionalPart] = decimal.toString().split('.');
    if (!fractionalPart) {
        return [parseInt(integerPart, 10), 0, 1];
    }
    const denominator = Math.pow(10, fractionalPart.length);
    const numerator = parseInt(fractionalPart, 10);
    return [parseInt(integerPart, 10), numerator, denominator];
};

bmath.toIncorrect = function(drob) {
    return [0, (drob[0] * drob[2]) + drob[1], drob[2]];
}

bmath.toDec = function(drob) {
    return drob[0] + (drob[1] / drob[2]);
}

// Add the plus operation
bmath.plus = function(drob1, drob2) {
    const [int1, num1, den1] = drob1;
    const [int2, num2, den2] = drob2;

    const commonDenominator = den1 * den2;
    const newNum1 = num1 * (commonDenominator / den1);
    const newNum2 = num2 * (commonDenominator / den2);

    const newIntegerPart = int1 + int2 + Math.floor((newNum1 + newNum2) / commonDenominator);
    const newNumerator = (newNum1 + newNum2) % commonDenominator;

    return [newIntegerPart, newNumerator, commonDenominator];
};

// Add the multiply operation
bmath.multiply = function(drob1, drob2) {
    const [int1, num1, den1] = drob1;
    const [int2, num2, den2] = drob2;

    // Convert both numbers to improper fractions
    const improper1 = [int1 * den1 + num1, den1]; // Convert drob1 to improper fraction
    const improper2 = [int2 * den2 + num2, den2]; // Convert drob2 to improper fraction

    // Multiply the numerators and denominators
    const newNumerator = improper1[0] * improper2[0];
    const newDenominator = improper1[1] * improper2[1];

    // Convert back to the drob format
    const newIntegerPart = Math.floor(newNumerator / newDenominator);
    const remainderNumerator = newNumerator % newDenominator;

    return [newIntegerPart, remainderNumerator, newDenominator];
};

bmath.divide = function(drob1, fdrob2) {
    var drob2 = bmath.toIncorrect(fdrob2)
    return bmath.multiply(drob1, [0, drob2[2], drob2[1]])
}

bmath.minus = function(drob1, drob2) {
    const [int1, num1, den1] = drob1;
    const [int2, num2, den2] = drob2;

    const commonDenominator = den1 * den2;
    const newNum1 = num1 * (commonDenominator / den1);
    const newNum2 = num2 * (commonDenominator / den2);

    const totalNumerator = newNum1 - newNum2;
    const newIntegerPart = int1 - int2 + Math.floor(totalNumerator / commonDenominator);
    const newNumerator = totalNumerator % commonDenominator;

    // Handle negative results
    if (newNumerator < 0) {
        newIntegerPart -= 1;
        newNumerator += commonDenominator;
    }

    return [newIntegerPart, newNumerator, commonDenominator];
};
