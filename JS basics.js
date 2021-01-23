var number = 5; // in-line comment

/* this is a
multi-line  comment
*/

/* Data Types:
undefined, null, boolean, string, symbol, number, object
*/

var myName = "Tai"

thisYear = 2021

let myFriend = "Luffy"

const pi = 3.14

/* 
Storing values with Assignment Operator
Declare variable =/ Assign variable
*/

var a; // declare variable
var b = 1 // declare and assign variable, '=' is the assign operator

a = 7;
b = a;
console.log(a)

// Initialize variables with Assignment Operator

// Initialize three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

// Case Sensitivity in variables

myVar = 20
myVar++ // = 21, this is called incrementing number
myVar-- // = 19, this is called decrementing number
var remainder;
remainder = 11 % 3; // use remainder to determine if a number is even or odd

var a = 3;
var b = 10;
var c = 12;

// modify the code below this line
a += 12;
b += 2;
c += 10;

// Compound assignment with Augmented Subtraction
a -= 6;
b -= 1;
c -= 2;

// Compound assignment with Augmented Multiplication
a *= 2;
b *= 3;
c *= 4

// Compound assignment with Augmented Division
a /= 2;
b /= 3;
c /= 4;

// Declare string variables
// Example
var firstName = "Andrew";
var lastName = "Fiora";

// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"" // use the backslash '\' before the "
 
// Quoting strings with single quotes

/*****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*****/

var firstLine = "First Line\n\tSecond Line\nThird Line";

// Concatenating strings with Plus Operator
var twoStr = "First string " + "Second string";
// Another way
var twoStr = "First string ";
twoStr += " Second string";

// Constructing strings with variables
var ourName = "youtube";
var ourStr = "http://" + ourName + ".com";

// Appending variables to strings
var anAdjective = "nice!";
var ourStr = "The weather is ";
ourStr += anAdjective;

// Find length of string
var firstNameLength = 0;
var firstName = "Shawn";

firstNameLength = firstName.length;

// Bracket Notation to Find first character in String
var firstLetter = "";
var firstName = "John";

firstLetter = firstName[0];

// String immutability
var myStr = "Bello World";

myStr[0] = "H"; // change B to H

// Bracket Notation to find Nth Character in a string
var firstName = "John";
var secondLetterOfFirstName = firstName[1];

// Bracket Notation to find the last character in a string
var firstName = "John";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

// test the function
console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Store multiple values with arrays
var ourArray = [["John", 23], ["Shawn", 18]];

// Access array data with indexes
var ourArray = [12, 1, 2];
var ourData = ourArray[1]; // equal 1

// Modify array data with indexes
var ourArray = [12, 1, 2];
ourArray[1] = 3; // equal 3

// Access multi-dimensional arrays with indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9, [10, 11]]];
var myData = myArray[0][0];

// Manipulate arrays with push() - add element to the end of the array
var myArray = [["A", 1], ["B", 2]];
myArray.push(["C", 3]);

// Manipulate arrays with pop() - remove last element
var ourArray = [1, 2, 3];
var newArray = ourArray.pop(); // remove the last item "3"
 
// Manipulate arrays with shift() - remove the first element
var ourArray = [1, 2, 3];
var newArray = ourArray.shift(); // remove the first item "1"

// Manipulate arrays with unshift() - add element to the beginning of the array
var ourArray = [1, 2, 3];
var newArray = ourArray.unshift(0);

// Shopping list
var myList = [["cereal", 3], ["milk", 2], ["banana", 3], ["juice", 2], ["egg", 12]];

// write reusable code with functions
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Passing values to function with arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(2, 1);

// Global scope and functions
// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5; // without 'var' oopsGlobal becomes global automatically
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


// Local scope and functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar);

// Global vs local scope in Functions

