/**
 * Calculator module providing basic arithmetic operations
 */

/**
 * Validates that inputs are valid numbers
 * @param {*} a - First value to validate
 * @param {*} b - Second value to validate
 * @throws {Error} If either value is not a valid number
 */
function validateNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Arguments cannot be NaN');
  }
  
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('Arguments must be finite numbers');
  }
}

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  validateNumbers(a, b);
  
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  
  return a / b;
}

// Export for CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    validateNumbers
  };
}

// Export for ES6 modules
if (typeof exports !== 'undefined' && typeof module === 'undefined') {
  exports.add = add;
  exports.subtract = subtract;
  exports.multiply = multiply;
  exports.divide = divide;
  exports.validateNumbers = validateNumbers;
}
