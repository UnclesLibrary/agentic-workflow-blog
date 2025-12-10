# Calculator API Reference

Complete API documentation for the Calculator module.

---

## Table of Contents

- [Module Structure](#module-structure)
  - [Importing Functions](#importing-functions)
  - [Function Exports](#function-exports)
- [Functions](#functions)
  - [add()](#addab)
  - [subtract()](#subtractab)
  - [multiply()](#multiplyab)
  - [divide()](#divideab)
- [Error Reference](#error-reference)
- [Type Definitions](#type-definitions)
- [Examples by Category](#examples-by-category)

---

## Module Structure

The Calculator module exports individual functions that can be imported selectively or all together.

### Importing Functions

#### Import All Functions

```javascript
// CommonJS
const { add, subtract, multiply, divide } = require('./calculator');

// ES6 Modules
import { add, subtract, multiply, divide } from './calculator.js';
```

#### Selective Imports

Import only the functions you need for optimal tree-shaking and smaller bundle sizes:

```javascript
// Import only addition
const { add } = require('./calculator');

// Import only what you need
const { add, multiply } = require('./calculator');

// ES6
import { divide } from './calculator.js';
```

### Function Exports

All functions are exported as named exports from the module:

- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction  
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division

---

## Functions

### `add(a, b)`

Adds two numbers and returns the sum.

**Syntax:**
```javascript
add(a, b)
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `a` | number | Yes | The first number (addend) |
| `b` | number | Yes | The second number (addend) |

**Returns:**
- `{number}` - The sum of `a` and `b`

**Throws:**

| Error | Condition | Error Message |
|-------|-----------|---------------|
| `Error` | Either parameter is not a number | "Both arguments must be numbers" |
| `Error` | Either parameter is NaN | "Arguments cannot be NaN" |
| `Error` | Either parameter is Infinity or -Infinity | "Arguments must be finite numbers" |

**Examples:**

```javascript
const { add } = require('./calculator');

// Basic addition
add(5, 3);           // 8
add(10, 20);         // 30

// Negative numbers
add(-5, 3);          // -2
add(-10, -20);       // -30

// Decimals
add(0.1, 0.2);       // 0.30000000000000004
add(1.5, 2.5);       // 4

// Zero
add(0, 5);           // 5
add(5, 0);           // 5
add(0, 0);           // 0

// Mixed positive and negative
add(-5, 10);         // 5
add(10, -5);         // 5

// Large numbers
add(1000000, 2000000);  // 3000000
```

**Edge Cases:**

```javascript
const { add } = require('./calculator');

// Very small decimals
add(0.0001, 0.0002);  // 0.0003

// Negative zero
add(-0, 5);           // 5
add(0, -0);           // 0

// Near MAX_SAFE_INTEGER
add(Number.MAX_SAFE_INTEGER, 0);  // 9007199254740991
```

**Error Examples:**

```javascript
const { add } = require('./calculator');

// Type errors
add('5', 3);          // Error: Both arguments must be numbers
add(5, null);         // Error: Both arguments must be numbers
add(undefined, 5);    // Error: Both arguments must be numbers
add([1], 2);          // Error: Both arguments must be numbers
add({value: 5}, 3);   // Error: Both arguments must be numbers
add(true, 5);         // Error: Both arguments must be numbers

// NaN errors
add(NaN, 5);          // Error: Arguments cannot be NaN
add(5, NaN);          // Error: Arguments cannot be NaN

// Infinity errors
add(Infinity, 5);     // Error: Arguments must be finite numbers
add(5, -Infinity);    // Error: Arguments must be finite numbers
```

---

### `subtract(a, b)`

Subtracts the second number from the first and returns the difference.

**Syntax:**
```javascript
subtract(a, b)
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `a` | number | Yes | The minuend (number to subtract from) |
| `b` | number | Yes | The subtrahend (number to subtract) |

**Returns:**
- `{number}` - The difference `a - b`

**Throws:**

| Error | Condition | Error Message |
|-------|-----------|---------------|
| `Error` | Either parameter is not a number | "Both arguments must be numbers" |
| `Error` | Either parameter is NaN | "Arguments cannot be NaN" |
| `Error` | Either parameter is Infinity or -Infinity | "Arguments must be finite numbers" |

**Examples:**

```javascript
const { subtract } = require('./calculator');

// Basic subtraction
subtract(10, 4);      // 6
subtract(20, 5);      // 15

// Negative result
subtract(5, 10);      // -5
subtract(3, 8);       // -5

// Negative numbers
subtract(-5, 3);      // -8
subtract(5, -3);      // 8
subtract(-5, -3);     // -2

// Decimals
subtract(5.5, 2.5);   // 3
subtract(10.75, 3.25); // 7.5

// Zero
subtract(10, 0);      // 10
subtract(0, 10);      // -10
subtract(0, 0);       // 0

// Same numbers (result is zero)
subtract(5, 5);       // 0
subtract(-5, -5);     // 0
```

**Edge Cases:**

```javascript
const { subtract } = require('./calculator');

// Very small differences
subtract(1.0001, 1.0);  // 0.00010000000000008882

// Large numbers
subtract(1000000, 500000);  // 500000

// Boundary values
subtract(Number.MAX_SAFE_INTEGER, 0);  // 9007199254740991
subtract(0, Number.MIN_SAFE_INTEGER);  // 9007199254740991
```

**Error Examples:**

```javascript
const { subtract } = require('./calculator');

// Type errors
subtract('10', 4);    // Error: Both arguments must be numbers
subtract(10, null);   // Error: Both arguments must be numbers

// NaN errors
subtract(NaN, 5);     // Error: Arguments cannot be NaN

// Infinity errors
subtract(Infinity, 5); // Error: Arguments must be finite numbers
```

---

### `multiply(a, b)`

Multiplies two numbers and returns the product.

**Syntax:**
```javascript
multiply(a, b)
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `a` | number | Yes | The first factor |
| `b` | number | Yes | The second factor |

**Returns:**
- `{number}` - The product of `a` and `b`

**Throws:**

| Error | Condition | Error Message |
|-------|-----------|---------------|
| `Error` | Either parameter is not a number | "Both arguments must be numbers" |
| `Error` | Either parameter is NaN | "Arguments cannot be NaN" |
| `Error` | Either parameter is Infinity or -Infinity | "Arguments must be finite numbers" |

**Examples:**

```javascript
const { multiply } = require('./calculator');

// Basic multiplication
multiply(6, 7);       // 42
multiply(5, 5);       // 25

// Negative numbers
multiply(-3, 4);      // -12
multiply(3, -4);      // -12
multiply(-3, -4);     // 12

// Decimals
multiply(2.5, 4);     // 10
multiply(0.5, 0.5);   // 0.25

// Multiplication by zero
multiply(5, 0);       // 0
multiply(0, 5);       // 0
multiply(0, 0);       // 0

// Multiplication by one
multiply(5, 1);       // 5
multiply(1, 5);       // 5

// Multiplication by negative one
multiply(5, -1);      // -5
multiply(-1, 5);      // -5
```

**Edge Cases:**

```javascript
const { multiply } = require('./calculator');

// Very small decimals
multiply(0.1, 0.1);   // 0.010000000000000002

// Fractions
multiply(0.25, 0.5);  // 0.125

// Large numbers
multiply(1000, 1000); // 1000000

// Near MAX_SAFE_INTEGER
multiply(Number.MAX_SAFE_INTEGER, 1);  // 9007199254740991
```

**Error Examples:**

```javascript
const { multiply } = require('./calculator');

// Type errors
multiply('6', 7);     // Error: Both arguments must be numbers
multiply(6, [7]);     // Error: Both arguments must be numbers

// NaN errors
multiply(NaN, 5);     // Error: Arguments cannot be NaN

// Infinity errors
multiply(Infinity, 5); // Error: Arguments must be finite numbers
```

---

### `divide(a, b)`

Divides the first number by the second and returns the quotient.

**Syntax:**
```javascript
divide(a, b)
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `a` | number | Yes | The dividend (number to be divided) |
| `b` | number | Yes | The divisor (number to divide by) |

**Returns:**
- `{number}` - The quotient `a / b`

**Throws:**

| Error | Condition | Error Message |
|-------|-----------|---------------|
| `Error` | Either parameter is not a number | "Both arguments must be numbers" |
| `Error` | Either parameter is NaN | "Arguments cannot be NaN" |
| `Error` | Either parameter is Infinity or -Infinity | "Arguments must be finite numbers" |
| `Error` | Divisor (b) is zero | "Division by zero is not allowed" |

**Examples:**

```javascript
const { divide } = require('./calculator');

// Basic division
divide(20, 4);        // 5
divide(15, 3);        // 5

// Decimal results
divide(7, 2);         // 3.5
divide(10, 4);        // 2.5

// Negative numbers
divide(-20, 4);       // -5
divide(20, -4);       // -5
divide(-20, -4);      // 5

// Zero as dividend
divide(0, 5);         // 0
divide(0, -5);        // -0

// Division by one
divide(10, 1);        // 10
divide(-10, 1);       // -10

// Division by negative one
divide(10, -1);       // -10
divide(-10, -1);      // 10

// Repeating decimals
divide(1, 3);         // 0.3333333333333333
divide(2, 3);         // 0.6666666666666666
```

**Edge Cases:**

```javascript
const { divide } = require('./calculator');

// Very small results
divide(1, 1000000);   // 0.000001

// Large results
divide(1000000, 2);   // 500000

// Decimal division
divide(0.5, 0.25);    // 2

// Near MAX_SAFE_INTEGER
divide(Number.MAX_SAFE_INTEGER, 1);  // 9007199254740991
```

**Error Examples:**

```javascript
const { divide } = require('./calculator');

// Division by zero errors
divide(10, 0);        // Error: Division by zero is not allowed
divide(0, 0);         // Error: Division by zero is not allowed
divide(-10, 0);       // Error: Division by zero is not allowed

// Type errors
divide('20', 4);      // Error: Both arguments must be numbers
divide(20, null);     // Error: Both arguments must be numbers

// NaN errors
divide(NaN, 5);       // Error: Arguments cannot be NaN
divide(5, NaN);       // Error: Arguments cannot be NaN

// Infinity errors
divide(Infinity, 5);  // Error: Arguments must be finite numbers
divide(5, Infinity);  // Error: Arguments must be finite numbers
```

---

## Internal Functions

### `validateNumbers(a, b)`

Internal validation function called by all exported functions.

**⚠️ Internal Function** - Exported but primarily for internal use

**Purpose:**
- Validates that both arguments are valid numbers
- Ensures type safety
- Prevents NaN and Infinity values

**Parameters:**
- `a` (any): First value to validate
- `b` (any): Second value to validate

**Returns:**
- `{void}` - Returns nothing on success

**Throws:**
- `Error` if type check fails
- `Error` if NaN is detected
- `Error` if Infinity is detected

**Validation Logic:**
```javascript
// 1. Type check
if (typeof a !== 'number' || typeof b !== 'number')
  throw Error

// 2. NaN check
if (isNaN(a) || isNaN(b))
  throw Error

// 3. Infinity check
if (!isFinite(a) || !isFinite(b))
  throw Error
```

---

## Error Reference

### Error Messages

| Error Message | Cause | Resolution |
|---------------|-------|------------|
| "Both arguments must be numbers" | Non-number type passed | Ensure both arguments are of type `number` |
| "Arguments cannot be NaN" | NaN value passed | Check calculations that might produce NaN |
| "Arguments must be finite numbers" | Infinity or -Infinity passed | Ensure values are within finite range |
| "Division by zero is not allowed" | Attempted to divide by zero | Check divisor is not zero before calling |

### Error Handling Patterns

#### Pattern 1: Try-Catch

```javascript
const { divide } = require('./calculator');

try {
  const result = divide(a, b);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

#### Pattern 2: Pre-Validation

```javascript
const { divide } = require('./calculator');

function safeDivide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return { error: 'Invalid types' };
  }
  if (b === 0) {
    return { error: 'Division by zero' };
  }
  return { result: divide(a, b) };
}
```

#### Pattern 3: Error Wrapper

```javascript
const calculator = require('./calculator');

function calculate(operation, a, b) {
  const errors = [];
  
  try {
    return { success: true, result: calculator[operation](a, b) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

---

## Type Definitions

### TypeScript Definitions

```typescript
/**
 * Adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 * @throws {Error} If arguments are invalid
 */
export function add(a: number, b: number): number;

/**
 * Subtracts second number from first
 * @param a - Minuend
 * @param b - Subtrahend
 * @returns Difference of a and b
 * @throws {Error} If arguments are invalid
 */
export function subtract(a: number, b: number): number;

/**
 * Multiplies two numbers
 * @param a - First factor
 * @param b - Second factor
 * @returns Product of a and b
 * @throws {Error} If arguments are invalid
 */
export function multiply(a: number, b: number): number;

/**
 * Divides first number by second
 * @param a - Dividend
 * @param b - Divisor
 * @returns Quotient of a and b
 * @throws {Error} If arguments are invalid or b is zero
 */
export function divide(a: number, b: number): number;
```

### JSDoc Definitions

```javascript
/**
 * @module calculator
 */

/**
 * @function add
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */

/**
 * @function subtract
 * @param {number} a - Minuend
 * @param {number} b - Subtrahend
 * @returns {number} Difference of a and b
 */

/**
 * @function multiply
 * @param {number} a - First factor
 * @param {number} b - Second factor
 * @returns {number} Product of a and b
 */

/**
 * @function divide
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} Division by zero is not allowed
 */
```

---

## Examples by Category

### Basic Arithmetic

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

// Four operations
add(5, 3);        // 8
subtract(10, 4);  // 6
multiply(6, 7);   // 42
divide(20, 4);    // 5
```

### Working with Decimals

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

add(0.1, 0.2);       // 0.30000000000000004
subtract(5.5, 2.5);  // 3
multiply(2.5, 4);    // 10
divide(7, 2);        // 3.5
```

### Working with Negatives

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

add(-5, 3);          // -2
subtract(-5, -3);    // -2
multiply(-3, 4);     // -12
divide(-20, 4);      // -5
```

### Chaining Operations

```javascript
const { add, multiply, divide } = require('./calculator');

const step1 = add(10, 5);          // 15
const step2 = multiply(step1, 2);  // 30
const result = divide(step2, 3);   // 10
```

### Error Handling

```javascript
const { divide } = require('./calculator');

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);  // "Division by zero is not allowed"
}
```

---

## Method Comparison Table

| Method | Operation | Symbol | Returns | Can Throw Division Error |
|--------|-----------|--------|---------|--------------------------|
| `add` | Addition | + | Sum | No |
| `subtract` | Subtraction | - | Difference | No |
| `multiply` | Multiplication | × | Product | No |
| `divide` | Division | ÷ | Quotient | Yes (div by zero) |

---

## Performance Characteristics

All methods have **O(1)** time complexity:

| Method | Time Complexity | Space Complexity |
|--------|----------------|------------------|
| `add` | O(1) | O(1) |
| `subtract` | O(1) | O(1) |
| `multiply` | O(1) | O(1) |
| `divide` | O(1) | O(1) |
| `_validateNumbers` | O(1) | O(1) |

---

**API Version:** 1.0.0  
**Last Updated:** 2025-12-10  
**Status:** Stable
