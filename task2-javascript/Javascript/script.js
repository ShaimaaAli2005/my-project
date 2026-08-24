// Variable declarations and assignment
let studentName = "Shaimaa";
let age = 21;
let isStudent = true;
let grade = 95;
let city;

// Print variables to console
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Grade:", grade);
console.log("City:", city);

// Mathematical operations
let mark1 = 90;
let mark2 = 85;
let total = mark1 + mark2;
let average = total / 2;

// Print math results
console.log("Total:", total);
console.log("Average:", average);

// Comparison operations
console.log(10 > 5);
console.log(10 === 10);
console.log(10 !== 5);

// Logical operations
let hasCertificate = true;
let hasExperience = true;
console.log(hasCertificate && hasExperience);
console.log(hasCertificate || hasExperience);
console.log(!hasCertificate);

// Grade evaluation with if-else
let studentGrade = 85;
if (studentGrade >= 90) {
    console.log("Excellent");
} else if (studentGrade >= 75) {
    console.log("Very Good");
} else if (studentGrade >= 60) {
    console.log("Good");
} else {
    console.log("You need more practice");
}

// Nested conditions for authentication
let username = "Shaimaa";
let password = "12345";
if (username === "Shaimaa") {
    if (password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Wrong password");
    }
} else {
    console.log("User not found");
}

// Switch statement for days
let day = 3;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary operator condition
let result = studentGrade >= 60 ? "Passed" : "Failed";
console.log(result);

// For loop execution
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// While loop execution
let counter = 1;
while (counter <= 5) {
    console.log("While:", counter);
    counter++;
}

// Do-while loop execution
let number = 1;
do {
    console.log("Do While:", number);
    number++;
} while (number <= 5);

// Loop break demonstration
for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log("Break:", i);
}

// Loop continue demonstration
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log("Continue:", i);
}

// Greeting function definition
function welcomeUser(name) {
    return `Welcome ${name}`;
}
console.log(welcomeUser("Shaimaa"));

// Age checking function
function checkAge(age) {
    if (age >= 18) return "You can register";
    return "You cannot register";
}
console.log(checkAge(21));

// Price calculation function
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(100, 3));

// Arrow function for squaring numbers
const square = num => num * num;
console.log(square(5));

// Array creation and manipulation
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[0]);
fruits.push("Mango");
fruits.pop();
console.log(fruits);

// Student grade evaluation function
function getStudentStatus(grade) {
    if (grade >= 90) return "Excellent";
    if (grade >= 80) return "Very Good";
    if (grade >= 60) return "Passed";
    return "Failed";
}

// Student array initialization
let students = [
    { name: "Shaimaa", grade: 95 },
    { name: "Ahmed", grade: 75 },
    { name: "Sara", grade: 50 }
];

// Array iteration using forEach
students.forEach(student => {
    console.log(student.name, getStudentStatus(student.grade));
});

// Shopping cart array initialization
let cart = [
    { product: "Laptop", price: 25000, quantity: 1 },
    { product: "Mouse", price: 500, quantity: 2 },
    { product: "Keyboard", price: 1000, quantity: 1 }
];

// Total cart price reduction
let cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log("Cart Total:", cartTotal);

// Discount calculation function
function calculateDiscount(total) {
    if (total >= 20000) return total * 0.15;
    if (total >= 10000) return total * 0.10;
    return 0;
}

// Discount and final price computation
let discount = calculateDiscount(cartTotal);
let finalPrice = cartTotal - discount;
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

// ATM balance state initialization
let balance = 5000;

// ATM withdrawal processing function
function withdraw(amount) {
    if (amount <= 0) return "Invalid amount";
    if (amount > balance) return "Not enough balance";
    balance -= amount;
    return ` Withdrawal successful. Balance: ${balance}`;
}
console.log(withdraw(1000));

// Admin authentication function
function login(username, password) {
    if (username === "admin" && password === "1234") return "Login successful";
    return "Invalid username or password";
}
console.log(login("admin", "1234"));

// Quiz questions array setup
let questions = [
    { question: "What is 2 + 2?", answer: 4 },
    { question: "What is 5 * 2?", answer: 10 },
    { question: "What is 10 - 3?", answer: 7 }
];

// Quiz score tracking logic
let score = 0;
questions.forEach(question => {
    if (question.answer === question.answer) score++;
});
console.log("Quiz Score:", score);

// Project initiation main function
function startProject() {
    let message = "JavaScript practice started!";
    let resultElement = document.getElementById("resultText");
    if (resultElement) resultElement.textContent = message;
    console.log("Welcome to JavaScript Revision Project!");
    console.log("Total Students:", students.length);
    console.log("Cart Total:", cartTotal);
    console.log("Final Price:", finalPrice);
    console.log("Quiz Score:", score);
}