---
sidebar_position: 1
---

# Array Manipulation - slice() and splice()

## Extracting the Last Two Elements from an Array

1. Using `slice()`:
```javascript
   const arr = [1, 2, 3, 4, 5];
   const lastTwo = arr.slice(-2);
   console.log(lastTwo); // Output: [4, 5]

   const copied = arr.slice(); // Copying the entire array
```

2. Using `splice()`:
```javascript
   const arr = [1, 2, 3, 4, 5];
   const lastTwo = arr.splice(-2);
   console.log(lastTwo); // Output: [4, 5]
```

Note: This method modifies the original array.

## slice() Method

Definition: Extracts a portion of an array without modifying the original array.

Syntax:
```javascript
arr.slice(start, end)
```

Examples:
- Copying an array
- Extracting from a specific index
- Using negative indices

## splice() Method

Definition: Modifies an array by removing or replacing existing elements and/or adding new elements.

Syntax:
```javascript
arr.splice(start, deleteCount, item1, item2, ...)
```

Examples:
- Deleting elements
- Inserting elements
- Replacing elements

## Key Differences

- `slice()` returns a new array without modifying the original
- `splice()` modifies the original array and can be used for adding, removing, or replacing elements

## Best Practices

- Use `slice()` for safe extraction without modifying the original array
- Use `splice()` when you need to modify the array in place
