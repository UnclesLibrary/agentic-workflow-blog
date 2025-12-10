# Calculator Usage Examples

Practical examples and use cases for the Calculator module.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Basic Examples](#basic-examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Advanced Patterns](#advanced-patterns)
- [Integration Examples](#integration-examples)
- [Common Pitfalls](#common-pitfalls)

---

## Getting Started

### Import and Initialize

```javascript
// CommonJS - Import all functions
const { add, subtract, multiply, divide } = require('./calculator');

// CommonJS - Selective import
const { add, multiply } = require('./calculator');

// ES6
import { add, subtract, multiply, divide } from './calculator.js';
```

### Your First Calculation

```javascript
const { add } = require('./calculator');

const sum = add(5, 3);
console.log(`5 + 3 = ${sum}`);  // 5 + 3 = 8
```

---

## Basic Examples

### Example 1: Simple Addition

```javascript
const { add } = require('./calculator');

// Add positive numbers
console.log(add(10, 20));     // 30

// Add negative numbers
console.log(add(-5, -3));     // -8

// Mix positive and negative
console.log(add(10, -3));     // 7

// Add decimals
console.log(add(1.5, 2.5));   // 4
```

### Example 2: Subtraction Scenarios

```javascript
const { subtract } = require('./calculator');

// Basic subtraction
console.log(subtract(10, 3));    // 7

// Negative result
console.log(subtract(3, 10));    // -7

// Subtract negative (like adding)
console.log(subtract(10, -5));   // 15

// Same numbers
console.log(subtract(5, 5));     // 0
```

### Example 3: Multiplication Patterns

```javascript
const { multiply } = require('./calculator');

// Regular multiplication
console.log(multiply(5, 4));     // 20

// Multiply by zero
console.log(multiply(5, 0));     // 0

// Multiply by one (identity)
console.log(multiply(5, 1));     // 5

// Multiply by negative one (negate)
console.log(multiply(5, -1));    // -5

// Decimals
console.log(multiply(0.5, 4));   // 2
```

### Example 4: Division Examples

```javascript
const { divide } = require('./calculator');

// Exact division
console.log(divide(20, 4));      // 5

// Decimal result
console.log(divide(7, 2));       // 3.5

// Divide zero
console.log(divide(0, 5));       // 0

// Repeating decimal
console.log(divide(1, 3));       // 0.3333333333333333
```

---

## Real-World Use Cases

### Use Case 1: Shopping Cart Total

```javascript
const { add } = require('./calculator');

function calculateCartTotal(items) {
  let subtotal = 0;
  
  // Sum all item prices
  for (const item of items) {
    subtotal = add(subtotal, item.price);
  }
  
  return subtotal;
}

const cart = [
  { name: 'Book', price: 12.99 },
  { name: 'Pen', price: 2.50 },
  { name: 'Notebook', price: 5.99 }
];

const total = calculateCartTotal(cart);
console.log(`Total: $${total.toFixed(2)}`);  // Total: $21.48
```

### Use Case 2: Tax Calculation

```javascript
const { multiply, add } = require('./calculator');

function calculateTax(amount, taxRate) {
  return multiply(amount, taxRate);
}

function calculateTotalWithTax(amount, taxRate) {
  const tax = calculateTax(amount, taxRate);
  return add(amount, tax);
}

const price = 100;
const salesTax = 0.08;  // 8%

const tax = calculateTax(price, salesTax);
const total = calculateTotalWithTax(price, salesTax);

console.log(`Price: $${price}`);           // Price: $100
console.log(`Tax: $${tax.toFixed(2)}`);    // Tax: $8.00
console.log(`Total: $${total.toFixed(2)}`); // Total: $108.00
```

### Use Case 3: Tip Calculator

```javascript
const { divide, multiply, add } = require('./calculator');

function calculateTip(billAmount, tipPercent) {
  const tipDecimal = divide(tipPercent, 100);
  return multiply(billAmount, tipDecimal);
}

function calculateTotalBill(billAmount, tipPercent) {
  const tip = calculateTip(billAmount, tipPercent);
  return add(billAmount, tip);
}

const bill = 45.50;
const tipPercentage = 18;

const tip = calculateTip(bill, tipPercentage);
const total = calculateTotalBill(bill, tipPercentage);

console.log(`Bill: $${bill.toFixed(2)}`);      // Bill: $45.50
console.log(`Tip (18%): $${tip.toFixed(2)}`);  // Tip (18%): $8.19
console.log(`Total: $${total.toFixed(2)}`);    // Total: $53.69
```

### Use Case 4: Unit Conversion

```javascript
const { multiply, divide, add, subtract } = require('./calculator');

// Distance conversions
function milesToKilometers(miles) {
  return multiply(miles, 1.60934);
}

function kilometersToMiles(km) {
  return divide(km, 1.60934);
}

// Temperature conversions
function celsiusToFahrenheit(celsius) {
  const multiplied = multiply(celsius, 9);
  const divided = divide(multiplied, 5);
  return add(divided, 32);
}

function fahrenheitToCelsius(fahrenheit) {
  const subtracted = subtract(fahrenheit, 32);
  const multiplied = multiply(subtracted, 5);
  return divide(multiplied, 9);
}

console.log(milesToKilometers(10));      // 16.0934
console.log(kilometersToMiles(16.0934)); // 10
console.log(celsiusToFahrenheit(25));    // 77
console.log(fahrenheitToCelsius(77));    // 25
```

### Use Case 5: Grade Average Calculator

```javascript
const { add, divide, multiply } = require('./calculator');

function calculateAverage(grades) {
  if (grades.length === 0) {
    throw new Error('Cannot calculate average of empty array');
  }
  
  let sum = 0;
  for (const grade of grades) {
    sum = add(sum, grade);
  }
  
  return divide(sum, grades.length);
}

function calculateWeightedAverage(items) {
  // items: [{ value, weight }]
  let totalValue = 0;
  let totalWeight = 0;
  
  for (const item of items) {
    const weighted = multiply(item.value, item.weight);
    totalValue = add(totalValue, weighted);
    totalWeight = add(totalWeight, item.weight);
  }
  
  return divide(totalValue, totalWeight);
}

// Regular average
const grades = [85, 90, 78, 92, 88];
const average = calculateAverage(grades);
console.log(`Average: ${average.toFixed(2)}`);  // Average: 86.60

// Weighted average
const coursework = [
  { value: 85, weight: 0.40 },  // Tests: 40%
  { value: 90, weight: 0.30 },  // Projects: 30%
  { value: 95, weight: 0.30 }   // Final: 30%
];
const weightedAvg = calculateWeightedAverage(coursework);
console.log(`Weighted Average: ${weightedAvg.toFixed(2)}`);  // Weighted Average: 89.50
```

### Use Case 6: Interest Calculator

```javascript
const { multiply, add, subtract } = require('./calculator');

function calculateSimpleInterest(principal, rate, time) {
  // I = P * r * t
  const rateMultiplied = multiply(principal, rate);
  return multiply(rateMultiplied, time);
}

function calculateCompoundInterest(principal, rate, time) {
  // A = P(1 + r)^t (simplified yearly compounding)
  const onePlusRate = add(1, rate);
  let amount = principal;
  
  for (let i = 0; i < time; i++) {
    amount = multiply(amount, onePlusRate);
  }
  
  return subtract(amount, principal);
}

const principal = 1000;
const annualRate = 0.05;  // 5%
const years = 3;

const simpleInterest = calculateSimpleInterest(principal, annualRate, years);
const compoundInterest = calculateCompoundInterest(principal, annualRate, years);

console.log(`Simple Interest: $${simpleInterest.toFixed(2)}`);      // Simple Interest: $150.00
console.log(`Compound Interest: $${compoundInterest.toFixed(2)}`);  // Compound Interest: $157.63
```

### Use Case 7: Discount Calculator

```javascript
const { divide, multiply, subtract } = require('./calculator');

function calculateDiscount(originalPrice, discountPercent) {
  const discountDecimal = divide(discountPercent, 100);
  return multiply(originalPrice, discountDecimal);
}

function calculateSalePrice(originalPrice, discountPercent) {
  const discount = calculateDiscount(originalPrice, discountPercent);
  return subtract(originalPrice, discount);
}

const originalPrice = 79.99;
const discountPercent = 25;

const discountAmount = calculateDiscount(originalPrice, discountPercent);
const salePrice = calculateSalePrice(originalPrice, discountPercent);

console.log(`Original: $${originalPrice.toFixed(2)}`);           // Original: $79.99
console.log(`Discount (25%): $${discountAmount.toFixed(2)}`);    // Discount (25%): $20.00
console.log(`Sale Price: $${salePrice.toFixed(2)}`);             // Sale Price: $59.99
```

### Use Case 8: Recipe Scaler

```javascript
const { divide, multiply } = require('./calculator');

function scaleIngredient(originalAmount, originalServings, desiredServings) {
  const scaleFactor = divide(desiredServings, originalServings);
  return multiply(originalAmount, scaleFactor);
}

function scaleRecipe(recipe, desiredServings) {
  const scaledIngredients = {};
  
  for (const [ingredient, amount] of Object.entries(recipe.ingredients)) {
    scaledIngredients[ingredient] = scaleIngredient(
      amount,
      recipe.servings,
      desiredServings
    );
  }
  
  return {
    ...recipe,
    servings: desiredServings,
    ingredients: scaledIngredients
  };
}

const recipe = {
  name: 'Chocolate Chip Cookies',
  servings: 24,
  ingredients: {
    flour: 2.5,      // cups
    sugar: 1,        // cups
    butter: 1,       // cups
    eggs: 2,         // count
    chocolate: 2     // cups
  }
};

const scaledRecipe = scaleRecipe(recipe, 48);
console.log('Scaled for 48 servings:');
console.log(`Flour: ${scaledRecipe.ingredients.flour} cups`);        // 5 cups
console.log(`Sugar: ${scaledRecipe.ingredients.sugar} cups`);        // 2 cups
console.log(`Butter: ${scaledRecipe.ingredients.butter} cups`);      // 2 cups
console.log(`Eggs: ${scaledRecipe.ingredients.eggs}`);               // 4
console.log(`Chocolate: ${scaledRecipe.ingredients.chocolate} cups`); // 4 cups
```

---

## Advanced Patterns

### Pattern 1: Calculator Wrapper with History

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

class CalculatorWithHistory {
  constructor() {
    this.history = [];
  }
  
  add(a, b) {
    const result = add(a, b);
    this.history.push({ operation: 'add', a, b, result });
    return result;
  }
  
  subtract(a, b) {
    const result = subtract(a, b);
    this.history.push({ operation: 'subtract', a, b, result });
    return result;
  }
  
  multiply(a, b) {
    const result = multiply(a, b);
    this.history.push({ operation: 'multiply', a, b, result });
    return result;
  }
  
  divide(a, b) {
    const result = divide(a, b);
    this.history.push({ operation: 'divide', a, b, result });
    return result;
  }
  
  getHistory() {
    return [...this.history];
  }
  
  clearHistory() {
    this.history = [];
  }
}

// Usage
const calc = new CalculatorWithHistory();
calc.add(5, 3);
calc.multiply(2, 4);
calc.subtract(10, 3);

console.log(calc.getHistory());
// [
//   { operation: 'add', a: 5, b: 3, result: 8 },
//   { operation: 'multiply', a: 2, b: 4, result: 8 },
//   { operation: 'subtract', a: 10, b: 3, result: 7 }
// ]
```

### Pattern 2: Safe Calculator with Result Object

```javascript
const calculator = require('./calculator');

function safeCalculate(operation, a, b) {
  try {
    const result = calculator[operation](a, b);
    return {
      success: true,
      result,
      operation,
      operands: [a, b]
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      operation,
      operands: [a, b]
    };
  }
}

// Usage
const result1 = safeCalculate('add', 5, 3);
console.log(result1);
// { success: true, result: 8, operation: 'add', operands: [5, 3] }

const result2 = safeCalculate('divide', 10, 0);
console.log(result2);
// { success: false, error: 'Division by zero is not allowed', operation: 'divide', operands: [10, 0] }
```

### Pattern 3: Batch Operations

```javascript
const { add, multiply } = require('./calculator');

function batchAdd(numbers) {
  if (numbers.length === 0) return 0;
  
  return numbers.reduce((sum, num) => add(sum, num), 0);
}

function batchMultiply(numbers) {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  
  return numbers.reduce((product, num) => multiply(product, num));
}

// Usage
const sum = batchAdd([1, 2, 3, 4, 5]);
console.log(sum);  // 15

const product = batchMultiply([2, 3, 4]);
console.log(product);  // 24
```

### Pattern 4: Expression Evaluator

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

function evaluateExpression(expression) {
  // Simple expression: "10 + 5 * 2"
  // Note: This is a simplified example without proper precedence
  
  const tokens = expression.split(' ');
  let result = parseFloat(tokens[0]);
  
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);
    
    switch (operator) {
      case '+':
        result = add(result, operand);
        break;
      case '-':
        result = subtract(result, operand);
        break;
      case '*':
        result = multiply(result, operand);
        break;
      case '/':
        result = divide(result, operand);
        break;
    }
  }
  
  return result;
}

// Usage (left-to-right evaluation, no precedence)
console.log(evaluateExpression("10 + 5"));     // 15
console.log(evaluateExpression("10 + 5 - 3")); // 12
```

### Pattern 5: Percentage Helper Functions

```javascript
const { divide, multiply, subtract, add } = require('./calculator');

const PercentageUtils = {
  // What is X% of Y?
  percentOf(percent, value) {
    const decimal = divide(percent, 100);
    return multiply(value, decimal);
  },
  
  // X is what percent of Y?
  whatPercentOf(value, total) {
    const ratio = divide(value, total);
    return multiply(ratio, 100);
  },
  
  // What is the percent change from X to Y?
  percentChange(oldValue, newValue) {
    const difference = subtract(newValue, oldValue);
    const ratio = divide(difference, oldValue);
    return multiply(ratio, 100);
  },
  
  // Increase X by Y%
  increaseByPercent(value, percent) {
    const increase = this.percentOf(percent, value);
    return add(value, increase);
  },
  
  // Decrease X by Y%
  decreaseByPercent(value, percent) {
    const decrease = this.percentOf(percent, value);
    return subtract(value, decrease);
  }
};

// Usage
console.log(PercentageUtils.percentOf(20, 150));           // 30 (20% of 150)
console.log(PercentageUtils.whatPercentOf(30, 150));       // 20 (30 is 20% of 150)
console.log(PercentageUtils.percentChange(100, 150));      // 50 (50% increase)
console.log(PercentageUtils.increaseByPercent(100, 10));   // 110
console.log(PercentageUtils.decreaseByPercent(100, 10));   // 90
```

---

## Integration Examples

### Integration 1: Express.js API

```javascript
const express = require('express');
const calculator = require('./calculator');

const app = express();

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { operation, a, b } = req.body;
  
  try {
    const result = calculator[operation](a, b);
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Calculator API running on port 3000');
});
```

### Integration 2: React Component

```javascript
import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './calculator';

function CalculatorComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  const operations = { add, subtract, multiply, divide };
  
  const handleCalculate = (operation) => {
    try {
      const res = operations[operation](parseFloat(a), parseFloat(b));
      setResult(res);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };
  
  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      
      <button onClick={() => handleCalculate('add')}>+</button>
      <button onClick={() => handleCalculate('subtract')}>-</button>
      <button onClick={() => handleCalculate('multiply')}>×</button>
      <button onClick={() => handleCalculate('divide')}>÷</button>
      
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
    </div>
  );
}

export default CalculatorComponent;
```

### Integration 3: Command Line Tool

```javascript
#!/usr/bin/env node

const calculator = require('./calculator');

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log('Usage: calc <number> <operation> <number>');
  console.log('Operations: add, subtract, multiply, divide');
  process.exit(1);
}

const [a, operation, b] = args;
const numA = parseFloat(a);
const numB = parseFloat(b);

try {
  const result = calculator[operation](numA, numB);
  console.log(`${a} ${operation} ${b} = ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
```

---

## Common Pitfalls

### Pitfall 1: Floating Point Precision

**Problem:**
```javascript
const { add } = require('./calculator');

const result = add(0.1, 0.2);
console.log(result);  // 0.30000000000000004
```

**Solution:**
```javascript
const { add } = require('./calculator');

const result = add(0.1, 0.2);
console.log(result.toFixed(2));  // "0.30"
// Or
console.log(Math.round(result * 100) / 100);  // 0.3
```

### Pitfall 2: Forgetting Error Handling

**Problem:**
```javascript
const { divide } = require('./calculator');

const result = divide(10, 0);  // Throws error, crashes program
```

**Solution:**
```javascript
const { divide } = require('./calculator');

try {
  const result = divide(10, 0);
} catch (error) {
  console.error('Division failed:', error.message);
}
```

### Pitfall 3: Type Coercion

**Problem:**
```javascript
const { add } = require('./calculator');

const input1 = '5';  // String from user input
const input2 = '3';
add(input1, input2);  // Error: Both arguments must be numbers
```

**Solution:**
```javascript
const { add } = require('./calculator');

const num1 = parseFloat(input1);
const num2 = parseFloat(input2);
add(num1, num2);  // Works correctly
```

### Pitfall 4: Not Validating Division by Zero

**Problem:**
```javascript
function calculate(a, b, operation) {
  return calc[operation](a, b);  // May throw if operation is 'divide' and b is 0
}
```

**Solution:**
```javascript
function calculate(a, b, operation) {
  if (operation === 'divide' && b === 0) {
    return { error: 'Cannot divide by zero' };
  }
  
  try {
    return { result: calc[operation](a, b) };
  } catch (error) {
    return { error: error.message };
  }
}
```

---

## Additional Resources

- [Calculator Documentation](CALCULATOR_DOCUMENTATION.md)
- [API Reference](API_REFERENCE.md)
- [Test Report](../TEST_REPORT.md)
- [Testing Guide](../TESTING_GUIDE.md)

---

**Last Updated:** 2025-12-10  
**Version:** 1.0.0
