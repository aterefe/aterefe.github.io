/**
*Operators:
*0. JavaScript operators are used to assign values, compare values, perform 
* arithmetic operations, and more.
*/
//1. Assignment operators
let y = 0;
let b = 2;
let x = 3;	
var z = 5;
var a = 6;
x =+ y;			
console.log(x); //<--prints 3
y -= x;
console.log(y);//<-- prints -3
z *= x;
console.log(z)//<-- prints out 15
a /= x;
console.log(a)//<--prints 2
a %= b;
console.log(a) //<-- prints 0
/**
*you use assignment operators are used to assign values to JavaScript variables.
*ussaully when you are operating on the varaible
*/
//2. Arithmetic operators
//example            
var theWorld = 2;
var newWorld = 3;   
let ourWorld = 4; 
const add = newWorld + ourWorld; 
console.log(newWorld); //<--7
const subtract = ourWorld - newWorld;
console.log(subtract); //<-- 1
const mutiply = ourWorld * newWorld;
console.log(mutiply);//<-- 12
const divide = ourWorld / theWorld;
console.log(divide);//<-- 2
const remainder = ourWorld % theWorld;
console.log(remainder); //<-- 0
/**
*Arithmetic operators are used to perform arithmetic between variables and/or 
*values.
*/
//3. Comparison operators
//Operator	Description
  5 === 5;	  //stricly equal to
  5 !== 4;   // stricly not equal to
  7 >	 6;       //greater than
  7 <	 8;      // less than
  7 >= 7; //greater than or equal to
  7 <= 8;	//less than or equal to
/**
*Comparison operators are used in logical statements to determine equality or 
* difference between variables or values.
*/
//4. Logical Operators 
//      Operator	        Description
if (3 > 4 &&	5 > 6){}  //and
if( "toy" === true || "object" === false){}//or
/*
*Logical operators are used to determine the logic between variables or values.
*/
//5. Unary operators
var number = "5";
var unary = -number;
console.log(unary)//<-- prints -5
/**
 * A unary operator takes only one operand/argument and performs an opreation.
 * The unary negation can negate a number
 * The unary negation opreator can convert non-number string into a number 
 * datatype
*/ 
//Tenary operator 
//variablename = (condition) ? value1:value2 
var age = 22;
function drinkable(age){return age > 21 ? "Old enough":"Too young"} //example
drinkable(age); //<--prints "Old enough"
/**Example explained: If the variable "age" is a value below 21, the value of 
 * the variable "drinkable" will be "Too young", otherwise the value of 
 * drinkable will be "Old enough".
 * Tenary operator is a shortcut of an if statement. The tenary operator has 
 * three paramters/argument in the syntax the first paramter is the condition 
 * statement that is left of the question mark, second paramter is the true to  
 * the left of the : result and the last is the false result right of the 
*/