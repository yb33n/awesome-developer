---
sidebar_position: 4
---

# Name and ID Attributes

The "name" attribute for input elements is crucial in HTML forms. It serves several important purposes:

## 1. Form Data Submission:
- When a form is submitted, the "name" attribute is used to identify each form control's data.
- The server receives the form data as name-value pairs, where the "name" attribute provides the key for each piece of data.

```html
   <input type="text" name="username" value="JohnDoe">
```

When submitted, this would be sent as: username=JohnDoe

## 2. Accessing Form Data with JavaScript:
- In JavaScript, you can easily access form elements using their "name" attribute.

```javascript
   let username = document.forms["myForm"]["username"].value;
```

## 3. Radio Button Grouping:
- For radio buttons, the "name" attribute groups related options together.
- Only one radio button in a group (with the same name) can be selected at a time.

```html
   <input type="radio" name="gender" value="male"> Male
   <input type="radio" name="gender" value="female"> Female
```

## 4. Checkbox Identification:
- For checkboxes, the "name" attribute helps identify which options were selected when multiple checkboxes are used.

```html
   <input type="checkbox" name="hobbies" value="reading"> Reading
   <input type="checkbox" name="hobbies" value="sports"> Sports
```

## 5. Array-like Submissions:
- When multiple form elements share the same "name", they are submitted as an array-like structure.

```html
   <input type="checkbox" name="fruits[]" value="apple"> Apple
   <input type="checkbox" name="fruits[]" value="banana"> Banana
```

## 6. Server-Side Processing:
- On the server side, the "name" attribute is used to retrieve specific form data.

## 7. Query String Parameters:
- For GET requests, the "name" attribute becomes part of the URL query string.

If a form with `<input name="search" value="example">` is submitted via GET, the URL might look like: `http://example.com/search?search=example`

## 8. Accessibility:
- Screen readers can use the "name" attribute to provide context to users about the purpose of the input field.

