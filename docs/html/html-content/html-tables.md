---
sidebar_position: 6
---

# HTML Tables

HTML tables are used to display data in a grid-like format of rows and columns. They are ideal for presenting structured, tabular data.

## Table Structure

A basic table consists of the following elements:

1. `<table>`: The main container for the entire table
2. `<thead>`: Contains the header rows of the table (optional)
3. `<tbody>`: Contains the main body rows of the table
4. `<tfoot>`: Contains the footer rows of the table (optional)
5. `<tr>`: Defines a table row
6. `<th>`: Defines a header cell
7. `<td>`: Defines a standard data cell

## Basic Table Syntax

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
</table>
```

## Table Attributes

1. `colspan`: Specifies how many columns a cell should span
2. `rowspan`: Specifies how many rows a cell should span
3. `scope`: Used with `<th>` to specify if it's a header for a column, row, or group of columns or rows

Example:
```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Country</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>30</td>
    <td rowspan="2">USA</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>28</td>
  </tr>
  <tr>
    <td colspan="2">Average Age: 29</td>
    <td>Various</td>
  </tr>
</table>
```

## Caption

The `<caption>` element can be used to give the table a title or description:

```html
<table>
  <caption>Employee Information</caption>
  <!-- Table content -->
</table>
```

## Table Sections

For larger tables, you can use `<thead>`, `<tbody>`, and `<tfoot>` to group rows:

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

## Accessibility Considerations

1. Use `<th>` elements for header cells and `<td>` for data cells
2. Use the `scope` attribute on `<th>` elements to associate header cells with data cells
3. Provide a caption for the table using the `<caption>` element
4. For complex tables, use `id` and `headers` attributes to associate data cells with header cells

Example of a more accessible table:

```html
<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$100</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

## Best Practices

1. Use tables for tabular data only, not for layout purposes
2. Keep tables simple and avoid nesting tables within tables
3. Use appropriate table structure (`<thead>`, `<tbody>`, `<tfoot>`)
4. Use `<th>` for header cells to improve accessibility and styling
5. Consider using responsive design techniques for tables on small screens
6. Use CSS for styling rather than deprecated HTML attributes

## Responsive Tables

For better mobile experience, you can make tables responsive:

```html
<div class="table-responsive">
  <table>
    <!-- Table content -->
  </table>
</div>
```

```css
.table-responsive {
  overflow-x: auto;
}
```

## Example: Complex Table

Here's an example of a more complex table using various features:

```html
<table>
  <caption>Quarterly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
      <th scope="col">Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Widget A</th>
      <td>100</td>
      <td>120</td>
      <td>130</td>
      <td>140</td>
    </tr>
    <tr>
      <th scope="row">Widget B</th>
      <td>85</td>
      <td>90</td>
      <td>100</td>
      <td>110</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>185</td>
      <td>210</td>
      <td>230</td>
      <td>250</td>
    </tr>
  </tfoot>
</table>
```
