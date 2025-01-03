---
sidebar_position: 2
---

# JavaScript Loops: A Comprehensive Guide

Loops are used to repeat a block of code multiple times. They are particularly useful when you need to perform the same operation on a collection of items or when you want to execute code until a specific condition is met. This article will focus on the three main types of loops: `for`, `while`, and `do...while`.

## The `for` Loop

The `for` loop is one of the most commonly used loops in JavaScript. It provides a concise way to iterate a specific number of times.

### Syntax

```javascript
for (initialization; condition; update) {
  // code to be executed
}
```

### Example: Calculating Compound Interest

```javascript
function calculateCompoundInterest(principal, rate, years) {
  let amount = principal;
  for (let year = 1; year <= years; year++) {
    amount *= (1 + rate);
    console.log(`Year ${year}: $${amount.toFixed(2)}`);
  }
  return amount;
}

const finalAmount = calculateCompoundInterest(1000, 0.05, 5);
console.log(`Final amount: $${finalAmount.toFixed(2)}`);
```

This example calculates compound interest over a period of years, printing the amount for each year.

## The `while` Loop

The `while` loop executes a block of code as long as a specified condition is true.

### Syntax

```javascript
while (condition) {
  // code to be executed
}
```

### Example: Password Validation

```javascript
function validatePassword(password) {
  let attempts = 3;
  while (attempts > 0) {
    const userInput = prompt(`Enter your password (${attempts} attempts left):`);
    if (userInput === password) {
      console.log("Access granted!");
      return true;
    }
    attempts--;
  }
  console.log("Access denied. Too many failed attempts.");
  return false;
}

validatePassword("secretpassword");
```

This example simulates a password validation system with a limited number of attempts.

## The `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it always executes the code block at least once before checking the condition.

### Syntax

```javascript
do {
  // code to be executed
} while (condition);
```

### Example: Menu Selection

```javascript
function displayMenu() {
  console.log("\n1. View balance");
  console.log("2. Deposit money");
  console.log("3. Withdraw money");
  console.log("4. Exit");
}

function processMenuSelection() {
  let selection;
  do {
    displayMenu();
    selection = prompt("Enter your choice (1-4):");
    switch (selection) {
      case "1":
        console.log("Your balance is $1000");
        break;
      case "2":
        console.log("Deposit successful");
        break;
      case "3":
        console.log("Withdrawal successful");
        break;
      case "4":
        console.log("Thank you for using our service");
        break;
      default:
        console.log("Invalid selection. Please try again.");
    }
  } while (selection !== "4");
}

processMenuSelection();
```

This example demonstrates a simple banking menu system that continues to prompt the user until they choose to exit.

## Comparing Loop Types

- Use a `for` loop when you know the number of iterations in advance, like in the compound interest calculation.
- Use a `while` loop when you want to continue looping as long as a condition is true, such as in the password validation example.
- Use a `do...while` loop when you want to ensure the code block is executed at least once, regardless of the condition, as shown in the menu selection example.

## Best Practices and Tips

1. **Avoid infinite loops**: Always ensure that your loop condition will eventually become false.

2. **Use meaningful variable names**: Instead of `i`, `j`, or `k`, use descriptive names like `year`, `attempts`, or `selection`.

3. **Keep loops simple**: If your loop becomes too complex, consider breaking it into smaller functions.

4. **Be cautious with loop performance**: For large datasets, consider using more efficient looping methods or array methods.

5. **Use `break` and `continue` statements wisely**: These can help control the flow of your loops when needed.

```javascript
function findFirstEvenNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      continue; // Skip odd numbers
    }
    console.log(`First even number found: ${numbers[i]}`);
    break; // Exit loop after finding the first even number
  }
}

findFirstEvenNumber([1, 3, 5, 2, 4, 6]);
```

This example demonstrates the use of `continue` and `break` to find the first even number in an array.
