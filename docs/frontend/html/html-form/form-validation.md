---
sidebar_position: 5
---

# Form Validation

HTML5 introduced built-in form validation:

- `required`: Specifies that an input field must be filled out
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data
- `min` and `max`: Specifies the minimum and maximum values of numerical input types
- `pattern`: Specifies a regular expression that an input field's value is checked against

```html
<input type="text" id="username" name="username" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9]+">
```

## Accessibility Considerations

1. Use `<label>` elements and associate them with inputs using the `for` attribute
2. Group related form controls using `<fieldset>` and `<legend>`
3. Provide clear instructions and error messages
4. Use ARIA attributes when necessary

Example of grouping with `<fieldset>`:
```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
```

## Best Practices

1. Use appropriate input types (e.g., `email` for email addresses, `tel` for phone numbers)
2. Implement both client-side and server-side validation
3. Provide clear labels and instructions for each form field
4. Use placeholder text to provide examples, not to replace labels
5. Implement proper error handling and display clear error messages
6. Consider using `autocomplete` attributes for common fields
7. Make forms responsive for mobile devices
