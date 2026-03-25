// ===============================
// Simple JavaScript Demo Project
// ===============================

// 1. Variables
let userName = "Farhan";
let age = 17;
let isStudent = true;

console.log("Name:", userName);
console.log("Age:", age);
console.log("Student:", isStudent);

// 2. Function
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet(userName));

// 3. Array
let subjects = ["Math", "English", "Computer"];

console.log("Subjects:");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

// 4. Object
let student = {
    name: "Farhan",
    age: 17,
    marks: [80, 75, 90]
};

console.log("Student Info:", student);

// 5. Loop (forEach)
student.marks.forEach(function(mark, index) {
    console.log("Subject", index + 1, "Marks:", mark);
});

// 6. Calculate average
function calculateAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

let average = calculateAverage(student.marks);
console.log("Average Marks:", average);

// 7. Conditional
if (average >= 80) {
    console.log("Grade: A");
} else if (average >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// 8. Simple Calculator
function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return b !== 0 ? a / b : "Cannot divide by zero";
    } else {
        return "Invalid operator";
    }
}

console.log("Calculator:");
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));

// 9. Random Number Generator
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Number:", getRandomNumber(1, 100));

// 10. Simple Counter
let count = 0;

function increase() {
    count++;
    console.log("Count:", count);
}

function decrease() {
    count--;
    console.log("Count:", count);
}

increase();
increase();
decrease();

// 11. Working with Strings
let text = "JavaScript is fun";

console.log("Uppercase:", text.toUpperCase());
console.log("Length:", text.length);
console.log("Includes 'fun':", text.includes("fun"));

// 12. Simple Login Check
function login(username, password) {
    let correctUser = "admin";
    let correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

console.log(login("admin", "1234"));
console.log(login("user", "0000"));

// 13. Timer Example
setTimeout(function() {
    console.log("This message appears after 2 seconds");
}, 2000);

// 14. Interval Example (runs multiple times)
let interval = setInterval(function() {
    console.log("Running every 1 second");
}, 1000);

// Stop interval after 5 seconds
setTimeout(function() {
    clearInterval(interval);
    console.log("Interval stopped");
}, 5000);

// ===============================
// End of Program
// ===============================