/**
*Operators:
*0. JavaScript operators are used to assign values, compare values, perform 
* arithmetic operations, and more.
*/
//1. Assignment operators
let y = 0;
let x = 3;	
x =+ y;			
console.log(x); //<--prints 3
/**
*you use assignment operators are used to assign values to JavaScript variables.
*ussaully when you are operating on the varaible
*/
//2. Arithmetic operators
//example             Description    
var newWorld = 3;   //newWorld has a value of 3 
let ourWorld = 4;   //ourWorld has a value of
newWorld += ourWorld; //<--newWorld = 3 + 4;
console.log(newWorld); //<--7
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
var r = [1, 2, 3];
//Operator      Description
delete x(0);  //<--delete first elemen

/**
*The delete operator deletes an object, an object's property, or an element at 
* a specified index in an array.
*/ 
//Tenary operator 
//variablename = (condition) ? value1:value2 
var age = 22;
function drinkable(age){(age < 21) ? "Old enough":"Too young";} //example
drinkable(age); //<--prints "Old enough"
/**Example explained: If the variable "age" is a value below 21, the value of 
 * the variable "drinkable" will be "Too young", otherwise the value of 
 * drinkable will be "Old enough".
*/