/**
 * Datatypes 
 * 
 * 0. Data types are data that javascript can read. All values are data types 
 * There are many diffrenet data types such as Number, String, Boolean, Array, 
 * Object, Function, undefined, null, NaN, Infinity and -Infinity.
*/
//1. number
var myNum = 5; // Regular Number 
myNum = 1.5; // Decimal Number
myNum = 4 + 5; // Mathematical Expressions
/*
*Any numerical value; positive negative, or w decimal points
*Like regular numbers, we can add, subtract, divide, and multiple
*And new values can be created with arithmetic expressions 
*/
//2. Strings
var myVar; // <--declaring a variable
myVar= "Chicago"; // <--string made with single quotes
myVar= "Los Angeles"; //← string made with double qoutes
/*A collection of characters / symbols surrounded by quotes i.e (‘ ’ or “ ”)
*We can access individual characters in a string with bracket notation
*Can be combined using the + operator 
*Have a length property that returns the total number of characters the string contains 
*/
//4. Booleans
var Bool1 = true; //boolean value 

Bool1 = false; //boolean value

Bool1= 4 === 4; //Comparaison 
/*
*A value based on true or false value
*A true false value 
*You can almost think of them similar to on/off switches
*Typically used in conditional statement 
*Can be created with boolean expression using comparison operators 
*/
//5. Array
[ ] //← this an array literal
var myArray = [ ];  // ← this is an array literal assigned to a variable called my array
var ourArray = [ "hello", "what's up", "yo"]; //← this an array literal w string data type
/*
*Arrays - is a complex data type that is used to store multiple data types
*Every value in the list has an index- the num position of the value in the list
*First value in the list has an index of 0, the second has an index of 1 and so on
*Arrays can contain references to any other data type, this includes: Strings, numbers, booleans, other  arrays, objects, and even function
*/
//6. Object
{ }; //← this is an object literal
var myObject = { }; //← this is an object literal assigned to a variable named myObject
myObject = {key1: "yesssir" , key2: "Nope"} //← this is an Object literal with string data types assigned to key1 and key2
/*
*An Object literal is a complex data type that is used to store data
*Usually a collection of data relating to a single object/identity stored in curly braces { }
*Similar to arrays, but instead of using indices, values are stored at keys in object
*Object can contain references to any other data type, this includes: strings, numbers, booleans, other arrays, and objects, and even functions!
*/
//7. functions
function model1(param1, param2){
    //functionbody goes here
}//<-- syntax of function
/*
*function allow us to enscapulate a block of code, and execute that block of code whenever we want and how many times we want
*function has parameters they are basically inputs or place holder for the real value
*/
//8. undefinded
let c;
console.log(c); // <--undefined
/*
*undefined means a varabile has been decalred but not assigned
*/
//9. Null
let a = null;
console.log(a);//<--null
/*
*null is an empty or non existence value
*null must be assinged
*/
//10. Nan
function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
/**
*NaN is a property of the global object.
*NaN is Not-A-Number
*if data type is not a number it'll become NAN
*/
//11. Infinity & -Infinity 
var car = 1.797693134862315E+308.//<-- infinity 
var truck = -1.797693134862316E+308. //<-- -infinity 
/*
*Infinity is a numeric value that represents positive infinity.
*-Infinity is a numeric value that represents negative infinity.
*/
//11. What is the difference between primitive/simple and complex data types?
typeof "John";              // Returns "string" 
typeof 3.14;                // Returns "number"
typeof true;                // Returns "boolean"
typeof false;               // Returns "boolean"
typeof x;                   // Returns "undefined" (if x has no value)
//above examples are primitives datatypes
typeof {name:'Kobe', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
//above examples are complex datatypes
/* 
*A primitive data value is a single simple data value with no additional properties and methods.
*The typeof operator can return one of these primitive types: string, number, boolean, and undefined.
*The typeof operator can return one of two complex types: function and object
*The typeof operator returns "object" for objects, arrays, and null.
*The typeof operator does not return "object" for functions.
*/
//12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
/**
*by copy are setting a varabile to equal a primitve data and then copying that varabile and assinging it to a new varaible
*by refecnce is refering to a value inside a a complex data type to refer to that value. 
*/ 
//Copy by value
var x = "hello";
var y = x //the value of var x is assigned to var y
console.log(y)//<-- prints: "hello"
//copy by reference
var obj = {name: "Abel"; age:34}; 
/**
 * here ref is reffering back to obj which has a datatype of object, so both
 * var obj and var ref both refernce to the object
 */ 
var ref = obj
