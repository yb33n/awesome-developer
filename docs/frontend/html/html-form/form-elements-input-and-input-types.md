---
sidebar_position: 2
---

# Form Elements: Input, Input Types

## Input and Input Types
### 1. Text Input:
```html
   <label for="username">Username:</label>
   <input type="text" id="username" name="username" required>
```
<div>
   <label for="username">Username:</label>
   <input type="text" id="username" name="username" required></input>
</div>

### 2. Password Input:
```html
   <label for="password">Password:</label>
   <input type="password" id="password" name="password" required>
```
<div>
   <label for="password">Password:</label>
   <input type="password" id="password" name="password" required></input>
</div>

### 3. Email Input:
```html
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" required>
```
<div>
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" required></input>
</div>

### 4. Number Input:
```html
   <label for="age">Age:</label>
   <input type="number" id="age" name="age" min="0" max="120">
```
<div>
   <label for="age">Age:</label>
   <input type="number" id="age" name="age" min="0" max="120"></input>
</div>

### 5. Checkbox:
```html
   <input type="checkbox" id="subscribe" name="subscribe" value="yes">
   <label for="subscribe">Subscribe to newsletter</label>
```
<div>
   <input type="checkbox" id="subscribe" name="subscribe" value="yes"></input>
   <label for="subscribe">Subscribe to newsletter</label>
</div>

### 6. Radio Buttons:
```html
   <p>Choose your favorite color:</p>
   <input type="radio" id="red" name="color" value="red">
   <label for="red">Red</label>
   <input type="radio" id="blue" name="color" value="blue">
   <label for="blue">Blue</label>
```
<div>
    <p>Choose your favorite color:</p>
    <input type="radio" id="red" name="color" value="red"></input>
    <label for="red">Red</label>
    <input type="radio" id="blue" name="color" value="blue"></input>
    <label for="blue">Blue</label>
</div>

### 7. Select Dropdown:
```html
   <label for="country">Country:</label>
   <select id="country" name="country">
     <option value="usa">United States</option>
     <option value="canada">Canada</option>
     <option value="uk">United Kingdom</option>
   </select>
```
<div>
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="usa">United States</option>
      <option value="canada">Canada</option>
      <option value="uk">United Kingdom</option>
    </select>
</div>

### 8. Textarea:
```html
   <label for="comments">Comments:</label>
   <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```
<div>
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
</div>

### 9. Submit Button:
```html
   <button type="submit">Submit</button>
```
<div>
    <button type="submit">Submit</button>
</div>

---
