# Calculator Quick Reference

A one-page reference for the Calculator module.

---

## Import

```javascript
// Import all functions
const { add, subtract, multiply, divide } = require('./calculator');

// Or import selectively
const { add, multiply } = require('./calculator');
```

---

## Functions

| Function | Syntax | Returns | Example |
|----------|--------|---------|---------|
| **Add** | `add(a, b)` | Sum | `add(5, 3)` → `8` |
| **Subtract** | `subtract(a, b)` | Difference | `subtract(10, 4)` → `6` |
| **Multiply** | `multiply(a, b)` | Product | `multiply(6, 7)` → `42` |
| **Divide** | `divide(a, b)` | Quotient | `divide(20, 4)` → `5` |

---

## Error Messages

| Error | Cause |
|-------|-------|
| "Both arguments must be numbers" | Non-number type passed |
| "Arguments cannot be NaN" | NaN value passed |
| "Arguments must be finite numbers" | Infinity passed |
| "Division by zero is not allowed" | Divisor is zero |

---

## Common Patterns

### Error Handling
```javascript
const { divide } = require('./calculator');

try {
  const result = divide(10, 0);
} catch (error) {
  console.error(error.message);
}
```

### Chaining Operations
```javascript
const { add, multiply, divide } = require('./calculator');

const step1 = add(10, 5);        // 15
const step2 = multiply(step1, 2); // 30
const result = divide(step2, 3);  // 10
```

### Percentage Calculation
```javascript
const { divide, multiply } = require('./calculator');

function percentOf(percent, value) {
  const decimal = divide(percent, 100);
  return multiply(value, decimal);
}
```

---

## Input Validation

✅ **Accepts**: Finite numbers (integers and decimals)  
❌ **Rejects**: Strings, null, undefined, NaN, Infinity, objects, arrays

---

## Quick Tips

1. **Floating-point precision**: `0.1 + 0.2` = `0.30000000000000004`
   - Solution: Use `result.toFixed(2)` for display

2. **Division by zero**: Always throws error
   - Solution: Check divisor before calling

3. **Type safety**: Always validates input types
   - Solution: Use `parseFloat()` on user input

4. **Tree-shaking**: Import only needed functions
   - Example: `const { add } = require('./calculator')` for smaller bundles

5. **No instantiation needed**: Functions are directly callable
   - Benefit: Simpler and more functional programming style

---

## Resources

- 📖 [Full Documentation](CALCULATOR_DOCUMENTATION.md)
- 🔍 [API Reference](API_REFERENCE.md)
- 📝 [Usage Examples](USAGE_EXAMPLES.md)
- 🧪 [Test Report](../TEST_REPORT.md)

---

**Version**: 1.0.0 | **Status**: Production Ready ✅
