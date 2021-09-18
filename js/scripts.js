function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && window.innerWidth <640) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//below's exercise for javascript
//alert("Hello! Welcome to my portfolio site.");
console.log("Hello world");

var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

console.log(escapedText1);
console.log(escapedText2);

var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!

var emptyVariable = null;
var notNullButAString = "null";
//console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};

console.log(personParent);

var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];

console.log(mixedArray[3][0]); // Outputs "nested array" ([0] is undefined)

function add(number1, number2) {
  return number1 + number2;
}

var result = add("string1", "string2");

console.log(result);

var a = {
  age: 1
};
var b = a;
b.name = "John"; // a.name will now also be "John"
console.log(a); //{age: 1, name: "John"}
console.log(b); //{age: 1, name: "John"}
