
// 1. Variables – Student Details
// Create variables for studentName, age, course, and mark.
// Use let, const, and var at least once.
// Print all details using console.log().
const studentName1 = "Shaik Saidavali";
let ageee = 24;
var course = "Full Stack Development";
let mark = 85;

console.log("Student Name:", studentName1);
console.log("Age:", ageee);
console.log("Course:", course);
console.log("Mark:", mark);

// 2. User Input
// Use prompt() to get:
// Name
// Age
// Display the name in the console.
// Display the age using alert().

let namee = prompt("Enter your name:");
let age1 = prompt("Enter your age:");

console.log("Name:", namee);
alert("Your name is: " + namee);
alert("Your age is: " + age1);

// 3. Data Types
// Create one variable for each:
// String
// Number
// Boolean
// Undefined
// Null
// Print the value and its typeof.

let dataStringValue = "JavaScript";
let dataNumberValue = 25;
let dataBooleanValue = true;
let dataUndefinedValue;
let dataNullValue = null;

console.log(dataStringValue, typeof dataStringValue);
console.log(dataNumberValue, typeof dataNumberValue);
console.log(dataBooleanValue, typeof dataBooleanValue);
console.log(dataUndefinedValue, typeof dataUndefinedValue);
console.log(dataNullValue, typeof dataNullValue);

// 4. Array – Shopping List
// Create an array containing 6 products:
// "Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"
// Print:
// First product
// Third product
// Last product
// Complete array

let shoppingProducts = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];

console.log("First:", shoppingProducts[0]);
console.log("Third:", shoppingProducts[2]);
console.log("Last:", shoppingProducts[shoppingProducts.length - 1]);
console.log("Complete Array:", shoppingProducts);

// 5. Object – Employee Details
// Create an object containing:
// name
// age
// role
// salary
// Print each property separately.

let employeeDetails = {
    name: "Rahul",
    age: 25,
    role: "Software Developer",
    salary: 50000
};

console.log("Name:", employeeDetails.name);
console.log("Age:", employeeDetails.age);
console.log("Role:", employeeDetails.role);
console.log("Salary:", employeeDetails.salary);

// 6. Arithmetic Operator – Bill Calculator
// Given:
// Product price = 500
// Quantity = 3
// Calculate and print:
// Total price
// Discount of ₹100
// Final amount
// Use +, -, *, and /.

let billProductPrice = 500;
let billQuantity = 3;
let billDiscount = 100;

let billTotalPrice = billProductPrice * billQuantity;
let billFinalAmount = billTotalPrice - billDiscount;

console.log("Total Price:", billTotalPrice);
console.log("Discount:", billDiscount);
console.log("Final Amount:", billFinalAmount);

// 7. Comparison Operators
// Write console.log() statements to check:
// 25 > 20
// 15 < 10
// 50 == "50"
// 50 === "50"
// 100 != "100"
// 100 !== "100"
// Print the results.

console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");

// 8. Logical Operators
// Find the output of these without running them first:
// console.log(10 > 5 && 20 > 15 || 5 > 10);

// console.log(10 < 5 || 20 >= 20 && 5 == "5");

// console.log(15 === "15" || 10 > 5 && 8 < 3);

// console.log(20 >= 20 && 5 !== "5" || 10 < 5);

// console.log(25 < 20 || 30 == "30" && 10 >= 10);

console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);

// 9. Ternary Operator – Login
// let passwordCorrect = true;
// Using a ternary operator, print:
// "Login successful"
// if true, otherwise:
// "Invalid password"

let loginPasswordCorrect = true;

let loginResult = loginPasswordCorrect
    ? "Login successful"
    : "Invalid password";

console.log(loginResult);

// 10. Type Casting – Marks
// You have:
// let mark1 = "80";
// let mark2 = "70";
// Convert both values into numbers and calculate the total.
// Expected:
// 150

let markOneString = "80";
let markTwoString = "70";

let markOneNumber = Number(markOneString);
let markTwoNumber = Number(markTwoString);

let marksTotal = markOneNumber + markTwoNumber;

console.log("Total:", marksTotal);

// 11. Voting Eligibility
// Create:
// let age = 20;
// Using if...else, print:
// "You can vote"
// if age is 18 or above; otherwise:
// "You cannot vote"

let voterAge = 20;

if (voterAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// 12. Student Grade
// Create a mark variable.
// Using if...else if...else:
// 90–100 → A Grade
// 75–89 → B Grade
// 50–74 → C Grade
// Below 50 → Fail
// Above 100 or below 0 → Invalid Mark

let examMark = 85;

if (examMark > 100 || examMark < 0) {
    console.log("Invalid Mark");
} else if (examMark >= 90) {
    console.log("A Grade");
} else if (examMark >= 75) {
    console.log("B Grade");
} else if (examMark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}

// 13. Time Greeting
// Create:
// let time = 15;
// Using if...else if, display:
// 1–6 → Early Morning
// 7–12 → Good Morning
// 13–15 → Good Afternoon
// 16–19 → Good Evening
// 20–24 → Good Night
// Otherwise → Invalid Time
// This directly follows the time-condition practice in your code.

let currentTime = 15;

if (currentTime >= 1 && currentTime <= 6) {
    console.log("Early Morning");
} else if (currentTime >= 7 && currentTime <= 12) {
    console.log("Good Morning");
} else if (currentTime >= 13 && currentTime <= 15) {
    console.log("Good Afternoon");
} else if (currentTime >= 16 && currentTime <= 19) {
    console.log("Good Evening");
} else if (currentTime >= 20 && currentTime <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}

// 14. Nested If – Job Eligibility
// Take:
// age
// height
// weight
// A candidate is eligible only if:
// Age ≥ 21
// Height ≥ 170 cm
// Weight ≥ 70 kg
// Use nested if statements and display the appropriate reason if the candidate is not eligible. This is based on the nested-if pattern in your code.

let candidateAge = 25;
let candidateHeight = 175;
let candidateWeight = 75;

if (candidateAge >= 21) {

    if (candidateHeight >= 170) {

        if (candidateWeight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Not eligible: Weight must be 70 kg or above");
        }

    } else {
        console.log("Not eligible: Height must be 170 cm or above");
    }

} else {
    console.log("Not eligible: Age must be 21 or above");
}

// 15. Switch – Traffic Light
// Create:
// let trafficLight = "green";
// Using switch, display:
// red → "Stop the vehicle"
// yellow → "Get ready"
// green → "Go"
// Anything else → "Invalid traffic light"

let selectedTrafficLight = "green";

switch (selectedTrafficLight) {

    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}