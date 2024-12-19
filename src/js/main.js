// Functions

function squareArea(side) {
	const res = side * side;
	return console.log(res);
}
squareArea(12);

// Arguments can be function executions
const body = document;

function logIt() {
	console.log("Logged");
	return squareArea(10);
}

body.addEventListener("click", logIt);

// Arrow function
body.addEventListener("keydown", () => {
	console.log("Key pressed");
});

// Functions can return other functions

// Functions can access variables declared in the parent context
const myName = "Thalles";
function data() {
	console.log(myName);

	function moreData() {
		const age = 22;
		console.log(myName, age);
	}
	moreData();
}
data();

// Exercises ==========================================================================================================================================================

function isTruthy(value) {
	return console.log(!!value);
}
isTruthy(1);

// Check odd or even number
function isEven(number) {
	if (number % 2 === 0) {
		return console.log("even");
	}
	console.log("odd");
}

isEven(21);

function typeOfValue(value) {
	return console.log(typeof value);
}
typeOfValue("Hello");

// Higher order functions
function processArray(arr, callback) {
	return arr.map(callback);
}
const squared = processArray([1, 2, 3], (num) => num * num);
console.log(squared); // Outputs: [1, 4, 9]

//Immediately Invoked Function Expressions (IIFE)
(() => {
	console.log("This runs immediately!");
})();

//Async/Await Functions.For asynchronous programming, functions can be defined as async and use await to pause execution until a promise resolves.
async function fetchData() {
	const response = await fetch("/api");
	const data = await response.json();
	return data;
}
