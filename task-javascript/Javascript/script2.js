let str = "Hello";
let num = 85;
let bool = true;
let und;
let nul = null;
let sym = Symbol("id");
let bigInt = 100n;
let obj = { name: "Alex" };

let grade = num;

if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Good");
} else if (grade >= 70) {
    console.log("Average");
} else if (grade >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}