---
sidebar_position: 1
---

# HTML Forms

HTML forms are used to collect user input on web pages. They allow users to enter data that can be sent to a server for processing. Forms are crucial for creating interactive web applications and gathering information from users.

## Basic Form Structure

A basic form consists of the following elements:

1. `<form>`: The main container for the form
2. `<label>`: Provides a label for form controls
3. `<input>`: Creates various types of input fields
4. `<button>`: Creates a clickable button

## Form Attributes

The `<form>` element has several important attributes:

- `action`: Specifies where to send the form-data when the form is submitted
- `method`: Specifies the HTTP method to use when sending form-data (GET or POST)
- `name`: Specifies a name for the form

```html
<form action="/submit" method="post" name="userForm">
  <!-- Form elements go here -->
</form>
```
