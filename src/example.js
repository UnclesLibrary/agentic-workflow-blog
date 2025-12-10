/**
 * Example usage of the Calculator module
 */

const { add, subtract, multiply, divide } = require('./calculator');

console.log('=== Calculator Examples ===\n');

// Addition
console.log('Addition:');
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`-10 + 25 = ${add(-10, 25)}`);
console.log(`0.1 + 0.2 = ${add(0.1, 0.2)}`);

// Subtraction
console.log('\nSubtraction:');
console.log(`10 - 4 = ${subtract(10, 4)}`);
console.log(`5 - 12 = ${subtract(5, 12)}`);

// Multiplication
console.log('\nMultiplication:');
console.log(`6 * 7 = ${multiply(6, 7)}`);
console.log(`-3 * 4 = ${multiply(-3, 4)}`);

// Division
console.log('\nDivision:');
console.log(`20 / 4 = ${divide(20, 4)}`);
console.log(`7 / 2 = ${divide(7, 2)}`);

// Error handling examples
console.log('\n=== Error Handling Examples ===\n');

// Division by zero
try {
  console.log('Attempting to divide by zero:');
  divide(10, 0);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// Invalid input types
try {
  console.log('\nAttempting to add string and number:');
  add('5', 3);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// NaN handling
try {
  console.log('\nAttempting to use NaN:');
  multiply(NaN, 5);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// Infinity handling
try {
  console.log('\nAttempting to use Infinity:');
  add(Infinity, 5);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
