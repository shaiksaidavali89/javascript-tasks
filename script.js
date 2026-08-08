// Task 1 - Student Details
const collegeName = "CIT";
let studentName = "Shaik Saidavali";
var studentAge = 24;

console.log(collegeName);
console.log(studentName);
console.log(studentAge);

// Task 2 - Mobile Price
let price = 25000;

price = 27000;

console.log(price);

// Task 3 - Company Name

const company = "Stackly";

console.log(company);

// Task 4 - Console Practice

console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");

// console.clear();

// Task 5 - Data Types

let name = "Shaik Saidavali";
let age = 24;
let isDeveloper = true;
let address;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDeveloper, typeof isDeveloper);
console.log(address, typeof address);

// Task 6 - Shopping Cart Array

let cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];

console.log(cart[0]);
console.log(cart[2]);
console.log(cart[cart.length - 1]);

// Task 7 - Favorite Movies

let movies = [
  "RRR",
  "Bahubali",
  "Pushpa",
  "KGF",
  "Salaar",
  "Kalki"
];

console.log(movies[1]);
console.log(movies[4]);
console.log(movies[movies.length - 1]);

// Task 8 - Employee Object

let employee = {
  name: "Rahul",
  age: 28,
  department: "Software",
  skills: ["Java", "JavaScript", "React"],
  salary: 60000
};

console.log(employee.name);
console.log(employee.department);
console.log(employee.skills[0]);
console.log(employee.salary);

// Task 9 - Product Details

let product = {
  productName: "Smartphone",
  brand: "Samsung",
  price: 35000,
  colors: ["Black", "Blue", "Silver"]
};

console.log(product.brand);
console.log(product.price);
console.log(product.colors[1]);

// Task 10 - Arithmetic Calculator

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);

// Task 11 - Increment Practice

let a = 5;

a++;
console.log(a);

++a;
console.log(a);

a--;
console.log(a);

--a;
console.log(a);

// Output

// 6
// 7
// 6
// 5

// Task 12 - Predict the Output

let aa = 10;

let b = aa++;

let c = ++b;

console.log(aa);
console.log(b);
console.log(c);

// Predicted Output

// 11
// 11
// 11


// Task 13 - Predict the Output
let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);

// Predicted Output

// 6
// 7
// 6

// Task 14 - School Object
let school = {
  schoolName: "ABC High School",
  principal: "Mr. Ramesh",
  totalStudents: 1500,
  classes: ["6th", "7th", "8th", "9th", "10th"]
};

console.log(school.schoolName);
console.log(school.principal);
console.log(school.classes[school.classes.length - 1]);


// Task 15 - Grocery List

let grocery = [
  "Rice",
  "Oil",
  "Sugar",
  "Salt",
  "Milk",
  "Eggs",
  "Soap",
  "Tea Powder"
];

console.log(grocery[0]);
console.log(grocery[3]);
console.log(grocery[grocery.length - 1]);


// Task 16 - User Profile

let username = "saidavali";
let email = "saidavali@gmail.com";
let agee = 24;
let isPremium = true;

console.log(username, typeof username);
console.log(email, typeof email);
console.log(agee, typeof agee);
console.log(isPremium, typeof isPremium);


// Task 17 - Variable Rules
var A = 10;
let B = 20;
const C = 30;

// Reassign
A = 100;
B = 200;
// C = 300; // Error

console.log(A);
console.log(B);
console.log(C);

// Redeclare
var A = 500; // Allowed

// let B = 600;   // Error
// const C = 700; // Error

console.log(A);


// Task 18 - Marks Calculation

let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);


// Task 19 - Company Database

let companyy = {
  company: "Infosys",
  employees: ["Rahul", "Anjali", "Kiran"],
  location: "Hyderabad",
  foundedYear: 1981,
  ceo: "Salil Parekh"
};

console.log(companyy.ceo);
console.log(companyy.location);
console.log(companyy.employees[0]);


// Task 20 - Mini Profile

let profile = {
  name: "Shaik Saidavali",
  city: "Guntur",
  hobbies: ["Coding", "Music", "Cricket"],
  age: 24
};

console.log(profile.name);
console.log(profile.hobbies[1]);
console.log(profile.age);
