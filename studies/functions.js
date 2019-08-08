/*
*Functions: 
*0.function allow us to enscapulate a block of code, and execute that block of code whenever we want and how many times we want
*/
//1.The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
/*declaration/definattion: creating the function
calling: using the function
*/
//2.What’s the difference between a function’s parameters and arguments PASSED to a function?
//parameters are place holders and argument are values of the parameters
//3. What’s the syntax for a NAMED function?
function add(numOne, numTwo){
    return numOne + numTwo;
}
add(4, 5);//<--prints 9
//4. How do we assign a function to a variable?
var x = function (a, b) {return a * b};
/**5.Functions 
 * can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we 
 * specify inputs, and how do we specify outputs? 
 * you can by use called functions for this
 */
 function subtract (num1, num2){
     num1 - num2;
 }
 subtract(10, 5) //<-- the function is being called and will print 5
/**6.Scope: Functions can see and modify variables in parent or global scopes. 
 * The inverse is NOT true.
 */
 function cowBoy(array){      //function cowBoy is global
     if(array.length > 10){  //if statement is local scope
         console.log("Darn");
     }else{
         console.log("Yee-Haw");
     }
 }
/**Global scope, function scope, if scope, Loop scope Each box represent 
 * different scope Scope determines what we have access to Child scopes has 
 * access to parent scope but parent scope doesn’t have access to child scope. There is Global scope, local scope, block scope 
 * Var can be reassigned
 * It’s Global & Local scope
 * Let can be reassigned
 * It’s only block
 * Const can’t be reassigned
 * It’s only Block
*/
/**
 * 7.Closures: Functions form closures around the data they house. 
 * If an object returned from the Function and is held in memory somewhere 
 * (referenced), that closure stays ALIVE, and data can continue to exist in
 * these closures! 
 */
 function name(){
   var name1 = "Abel";
   function displayName(){
       console.log(name1);
   }
   displayName(); //calling displayName
 }
 name(); //closing the function name
 
/*A function with access to the parent scope, 
	Even after the parent function has closed
A function using variables from a parent scope
Useful when returning functions from functions
Keep variables alive in returned function
*/
