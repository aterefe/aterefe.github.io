/**
*Functions: 
*0.function allow us to enscapulate a block of code, and execute that block of code whenever we want and how many times we want
*/
//1.The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
/**declaration/definattion: creating the function
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
var x = function (a, b) {return a * b};//<--this is called a function expression
/**5.Functions 
 * can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we 
 * specify inputs, and how do we specify outputs? 
 * you can by use called functions for this
 */
 (function subtract (){
  let num1 = 5;
  let num2 = 4;
   num1 - num2;
 })() //<-- the function is being called and will print undefinded
/**
 * The way function can optionally take input, and opitonally return a single 
 * value is by any function without parameters and not returning anything. To 
 * specify inputs by declaring and assigning variables inside the function body. 
 * To specify outputs you don't need to put a return statement in the body.  
 */
/**6.Scope: Functions can see and modify variables in parent or global scopes. 
 * The inverse is NOT true.
 */
 var firstName = "Eminem";//<--firstName is in the global scope 
 function myName(name){ 
   var name1 = name;//<--name 1 is in the local scope of MyName
   return name1
 }
 myName(firstName); //<-- prints "Eminem"
/**Global scope, function scope, if scope, Loop scope Each box represent 
 * different scope Scope determines what we have access to Child scopes has 
 * access to parent scope but parent scope doesn’t have access to child scope. 
 * There is Global scope, local scope, block scope
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
 var firstName = "Eminem";//<--firstName is in the global scope 
 function myName(name){ 
   var name1 = name;//<--name 1 is in the local scope of MyName()
   return function sayName(){
    var result = "Hi my name is " + name1;//read description below the function
    return result;//<--result is in the local scope of sayName()
   } 
 }
 myName(firstName)(); //<-- prints "Hi my name is Eminem"
 
 
/**
 * In the example above the clousre is happening when we refer the variable 
 * result since the variable name1 is declared in the local scope of the 
 * function MyName and the function sayName is use the varaible this would be 
 * consider of a closures. A function with access to the parent scope, 
 * Even after the parent function has return. A function using variables from a 
 * parent scope. Useful when returning functions from functions Keep variables 
 * alive in returned function.
*/
