🌐 WEB-DEV-LEARNING

This repository contains resources, notes, and practice projects to learn HTML & CSS.
It covers everything from basics to advanced topics along with hands-on projects.

📘 HTML Topics

Introduction to HTML & page structure

Headings, Paragraphs, Line breaks

Text formatting (bold, italic, underline, highlight, code, sup, sub)

Links & Images (absolute, relative, alt text)

Lists (ordered, unordered, nested)

Tables (rows, columns, rowspan, colspan)

Forms (inputs, labels, checkboxes, radio, dropdowns, textarea, buttons)

Semantic HTML (header, footer, section, article, nav)

Multimedia (audio, video, iframe)

🎨 CSS Topics

Introduction to CSS (inline, internal, external)

Colors (names, HEX, RGB, HSL)

Backgrounds (color, image, gradient)

Text styling (fonts, size, weight, alignment, spacing, Google Fonts)

Box Model (margin, padding, border, content, box-sizing)

Selectors (element, class, id, grouping, pseudo-classes, pseudo-elements)

Display & Positioning (block, inline, flex, grid, absolute, relative, sticky, fixed)

Flexbox (layout, alignment, wrapping)

Grid (rows, columns, gap, templates, areas)

Units (px, %, em, rem, vh, vw)

Variables (--var)

Transitions & Animations (:hover, @keyframes)

Shadows & Gradients (box-shadow, text-shadow, linear & radial gradient)

Media Queries (responsive design)

Styling Forms & Buttons

Advanced Selectors (child, sibling, attribute)

# Javascript 

# DATA TYPES AND VARIABLES 

Variables in JavaScript: var vs let

JavaScript provides different ways to declare variables: var, let, and const. This project demonstrates the differences between var and let.

📌 1. var (Old way of declaring variables)

Scope → Function-scoped (accessible only inside the function where it is declared).

Hoisting → Declarations are hoisted to the top of the scope, but initialized as undefined.

Re-declaration → The same variable name can be declared multiple times (may cause bugs).

Block scope issue → var does not respect block scope (if, for, etc.).

Issues with var:

Multiple declarations can override values unexpectedly.

Debugging becomes harder due to hoisting and scoping behavior.

📌 2. let (Introduced in ES6)

Scope → Block-scoped (works only inside { } where it is defined).

Hoisting → Declared but not initialized; stays in Temporal Dead Zone (TDZ) until execution reaches the declaration line.

Re-declaration → Not allowed in the same scope (avoids accidental overwrites).

Better for debugging since values are predictable and scoped properly.

📌 3. Data Types Demonstrated

Numbers (e.g., 34)

Strings (e.g., "Paras Rawat")

Variables can change type dynamically (JavaScript is loosely typed).

📌 Naming Convention

camelCase → Preferred way to name variables in JavaScript.

Example: sumOfArray, studentName, rollNumber.

# Operators in JavaScript

Operators are special symbols that perform operations on variables and values.
This project demonstrates different types of operators in JavaScript.

📌 1. Arithmetic Operators

Used for basic mathematical calculations.

+ → Addition

- → Subtraction

/ → Division

* → Multiplication

% → Modulus (remainder)

📌 2. Unary Operators

Work on a single operand.

++ → Increment (increases value by 1)

-- → Decrement (decreases value by 1)

📌 3. Logical Operators

Used to combine conditions.

&& (AND) → Returns true if both conditions are true.

|| (OR) → Returns true if at least one condition is true.

! (NOT) → Reverses the result (true → false, false → true).

📌 4. Comparison Operators

Used to compare values.

== → Equal to (checks value only).

=== → Strictly equal (checks value and type).

!= → Not equal.

!== → Strictly not equal (value or type mismatch).

> , < , >= , <= → Greater, less, greater/equal, less/equal.

📌 5. Ternary Operator

A shorthand way of writing if–else.

Syntax:
(condition) ? valueIfTrue : valueIfFalse

Example use case:

Checking voting eligibility based on age.

# conditional Statements

📌  If–Else Statement

Used when you need to check one condition and perform actions accordingly.

If the condition is true → one block runs.

If false → another block runs.

Example shown in project:

Check if a person is eligible to vote depending on age.

📌  2. If–Else Ladder

Used when there are multiple conditions to test one after another.

Each condition is checked in sequence until one is true.

If none match, the else block runs.

Example shown:

Checking marks to assign grades (A, B, C, or Fail).

📌  3. Nested If–Else

An if or else statement inside another if–else.

Used when decision-making requires multiple levels of conditions.

Example shown:

Checking if someone is an adult, senior citizen, teenager, or child.

📌 4. Switch Statement

Used when you have multiple values of a single variable to compare.

Works like an alternative to if–else ladder.

Each case matches a possible value.

Example shown:

Checking numbers (1–6) and printing corresponding letters (A–F).
loops 

 # Strings in JavaScript

A string in JavaScript is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Strings are used to store and manipulate text.

📌 String Creation

Using single or double quotes → "Paras Rawat".

Using backticks (Template Literals) → allows multiline strings and embedding variables.

Using the String object → new String("Pankaj") (not commonly used).

📌 String Operations

🔹 Concatenation

Strings can be joined using the + operator.

Template literals (`${var1}${var2}`) allow easy string interpolation.

🔹 Properties

.length → Returns the number of characters in the string.

🔹 Common Methods

.toUpperCase() → Converts string to uppercase.

.toLowerCase() → Converts string to lowercase.

.substring(start, end) → Extracts part of a string.

.split(separator) → Splits a string into an array of words (using spaces, commas, etc.).

# Functions in JavaScript

Functions are reusable blocks of code designed to perform a particular task. They help make programs more organized, readable, and efficient.

📌 1. Plain (Regular) Functions
🔹 Function Definition and Calling

Functions are defined using the function keyword.

They can take parameters and return a value or perform an action.

A function must be called to execute.

Example concepts shown:

Printing a name by passing it as a parameter.

Passing different types of arguments (string, number).

🔹 Function with Calculation

Functions can perform operations like addition or averaging values.

They can return results using the return keyword.

Returned values can be stored in a variable for later use.

Example concepts shown:

Calculating the average of two numbers.

Returning the sum of three numbers.

📌 2. Arrow Functions

Introduced in ES6, arrow functions provide a shorter syntax.

Written using the => symbol.

Often used for small, inline operations.

Example concept shown:

Using an arrow function inside another function to perform addition.

📌 Key Takeaways

Plain functions → Flexible, support hoisting (can be called before definition).

Arrow functions → Concise, often used for callbacks or small calculations.

Return keyword → Allows functions to send a result back to where they were called.

Functions improve reusability and modularity in code.


 # Objects 
- shallow copy
- Static object
- dynamic object
- constructor function

 # Arrays
- initailsation of array
- Accessing array
- Methods of array
   - push
   -pop
   -shift
   -slice
   -splice
-map function
-filter function
-Reduce function
  
# Hoisting in JavaScript

Hoisting means that variable and function declarations are moved to the top of their scope (before execution). However, how this works depends on whether you use var, let, const, or functions.

📌 Function Hoisting

Function Declarations (using function myFunc(){}) are fully hoisted.
→ You can call them before they are defined.

Function Expressions (using let myFunc = function(){} or const) are not hoisted.
→ Trying to call them before definition throws an error.

📌 Variable Hoisting

var → Only the declaration is hoisted, not the value.
→ If accessed before initialization, it shows undefined.

let and const → Neither the declaration nor the value is accessible before initialization.
→ They remain in the Temporal Dead Zone (TDZ) until the line of initialization.
→ Accessing them early throws a ReferenceError.

📌 Object Hoisting

Objects declared with let or const are not hoisted.

Accessing them before declaration results in an error.

📌 Class Definition

class persons defines a blueprint for creating person objects.

Properties

Name → Public property (default "rohan")

age → Public property (default 4)

#ht → Private property (default "6ft") accessible only through getter/setter

📌 Constructor

Accepts Branch, Rollnumber, and an optional list of Names.

Initializes Branch and Rollnumber for each object.

Logs the Names array when a new object is created.

Getter & Setter

get height() → Allows access to the private property #ht.

set height(value) → Allows updating the private property #ht.

Methods

walking() → Logs "I am walking".

Sleeping() → Logs "I am sleeping".

Built-in Objects in JavaScript

This project demonstrates the usage of two important built-in objects in JavaScript: Math and Date.

 # Math Object

The Math object provides mathematical constants and methods.
Key properties and functions demonstrated:

PI → Represents the value of π (3.14159…).

max() → Returns the largest number from a given set.

min() → Returns the smallest number from a given set.

round() → Rounds a number to the nearest integer.

floor() → Always rounds a number down to the nearest integer.

ceil() → Always rounds a number up to the nearest integer.

abs() → Returns the absolute (positive) value of a number.

random() → Generates a random number between 0 (inclusive) and 1 (exclusive).

pow() → Returns the result of raising a number to a specified power.

 📌 Date Object

The Date object is used to work with dates and times.
In this project, it is used to retrieve the current date and time when the program runs.
