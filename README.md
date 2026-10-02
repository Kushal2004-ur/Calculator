# Calculator

A simple and responsive calculator built using **HTML, CSS, and
JavaScript**.\
This project provides a clean calculator interface with basic arithmetic
operations, percentage calculation, decimal input, delete functionality,
clear functionality, and error handling.

## Features

-   Basic arithmetic operations:
    -   Addition (`+`)
    -   Subtraction (`-`)
    -   Multiplication (`*`)
    -   Division (`/`)
-   Percentage (`%`)
-   Decimal number input
-   Clear display (`C`)
-   Delete the last entered character (`X`)
-   Calculation using the equals (`=`) button
-   Error handling for invalid expressions
-   Right-aligned calculator display
-   Maximum display length handling through JavaScript font adjustment
-   Responsive and clean calculator-style UI
-   Hover and active button effects
-   Dark calculator theme with orange operator buttons

## Technologies Used

-   **HTML5** --- Structure of the calculator
-   **CSS3** --- Layout, styling, colors, grid, hover effects, and
    button design
-   **JavaScript** --- Calculator functionality and DOM manipulation

## JavaScript Concepts Practiced

-   DOM selection using `getElementById()`
-   Functions
-   Function parameters
-   Event handling with `onclick`
-   String manipulation
-   `slice()`
-   Conditional statements (`if`, `else if`, `else`)
-   `try...catch` error handling
-   Regular expressions
-   The `eval()` function for evaluating arithmetic expressions
-   Updating DOM element values
-   Dynamic CSS styling using JavaScript

## Project Structure

``` text
Calculator/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

## How It Works

### 1. Display

The calculator uses an HTML input element to display the current
expression or result:

``` html
<input id="display" readonly>
```

The `readonly` attribute prevents the user from typing directly into the
display.

### 2. Adding Numbers and Operators

The `appendToDisplay()` function adds the selected number or operator to
the display:

``` javascript
function appendToDisplay(input) {
  display.value += input;
}
```

For example:

``` text
7 → 78 → 78+ → 78+5
```

### 3. Clearing the Display

The `clearDisplay()` function removes everything from the display:

``` javascript
function clearDisplay() {
  display.value = "";
}
```

### 4. Deleting a Character

The `deleteNumber()` function removes the last character using
`slice()`:

``` javascript
function deleteNumber() {
  display.value = display.value.slice(0, -1);
}
```

Example:

``` text
123456 → 12345
```

### 5. Calculating the Result

The `calculate()` function evaluates the expression:

``` javascript
function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Error";
  }
}
```

For example:

``` text
10 + 5
```

produces:

``` text
15
```

The `try...catch` block prevents the application from breaking when an
invalid expression is entered.

### 6. Display Font Adjustment

The project can dynamically change the display font size according to
the number of characters:

``` javascript
function adjustFontSize() {
  const length = display.value.length;

  if (length <= 8) {
    display.style.fontSize = "3rem";
  } 
  else if (length <= 12) {
    display.style.fontSize = "2.5rem";
  } 
  else if (length <= 16) {
    display.style.fontSize = "2rem";
  } 
  else if (length <= 20) {
    display.style.fontSize = "1.5rem";
  } 
  else {
    display.style.fontSize = "1.2rem";
  }
}
```

This prevents long expressions from overflowing the calculator display.

## How to Run

1.  Clone or download this repository.

2.  Open the project folder.

3.  Make sure these files are present:

``` text
index.html
style.css
index.js
```

4.  Open `index.html` in your web browser.

5.  You can also use **Live Server** in Visual Studio Code for easier
    development.

## Upload to GitHub

Initialize Git:

``` bash
git init
```

Add the project files:

``` bash
git add .
```

Commit the project:

``` bash
git commit -m "Create calculator project"
```

Connect your GitHub repository:

``` bash
git remote add origin https://github.com/your-username/calculator.git
```

Push the project:

``` bash
git branch -M main
git push -u origin main
```

Replace `your-username` and the repository name with your actual GitHub
details.

## Future Improvements

-   Add keyboard support
-   Add a backspace button with a better icon
-   Implement `+/-` functionality
-   Improve percentage calculation
-   Add calculation history
-   Add dark/light theme switching
-   Prevent invalid operator combinations
-   Replace `eval()` with a safer expression parser
-   Add scientific calculator functions
-   Improve mobile responsiveness
-   Add unit tests for calculator functions

## Author

**Kushal Raj U R**

B.E. Information Science and Engineering Graduate

------------------------------------------------------------------------

⭐ If you found this project useful, consider giving the repository a
star!
