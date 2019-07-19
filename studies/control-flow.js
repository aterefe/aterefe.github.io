/*
*Control-Flow:
*0.control flow is the order in which the computer executes statements in a script.
*1. to create a contorl flow we can use if/else if/else statements & switch statement
*/ 
//1.if
//If (/* some condition here */) { }//syntax
if (x > 9){
  return true
}
/*
*If statement - Using the keyword if to check for a specific condition 
*Runs the code wrapped in curly braces { } only if a condition is true the condition is any boolean value (true/false) or any boolean expression 
*/
//2. else if
if (c > 9) { 
    return "Yo"
} else if(c < 100) { 
   return  "Sup"
}//syntax
var c = 0
/*
*What if we wanted/ needed to have more than one conditional(if statement)?
*We can chain these things together with else if statements.
*/
//3.else
var x = 0;
if (x > 3){
console.log('hello');
} else if (x < 40 ){
console.log("Bye");
} else { 
console.log("fuck you");
}//syntax 
/*
*Else statement - using the keyword else  that runs a block of code if all other conditions are false 
*So if all other conditions are false, that mean this is the default 
*Since else statement are defaults, there is NO condition to check for
*/
//4.switch
switch(x) {
  case x:
    // code block
    break;
  case x:
    // code block
    break;
  default:
    // code block
}
/*
*The switch expression is evaluated once.
*The switch statement is used to perform different actions based on different conditions.
*Use the switch statement to select one of many code blocks to be executed.
*The value of the expression is compared with the values of each case.
*If there is a match, the associated block of code is executed.
*/
