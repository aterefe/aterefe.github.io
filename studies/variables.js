/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob
//4. declaration and assingment 
var lastName; // ← declaring a variable
lastName = 'Nguyen'; //← Assigning a variable
/*
*declaring a varabile is just a declaration phase
*assigning the varabile is giving it a datatype, functions, and many more 
*/
//5. var,let,const
//var example 
var foodsList = ["banana", "water", "almond milk", "Ice cream"];
//let exapmle
let shoppingList = ["Nike", "Levi's", "Polo"];
//const exapmle
const number = 0; 
/*
*var can be reassingned and is global and local scope
*let is only a scope block and it can be reassign
*const cannot be reassinged and only in the block scope
*/
//5. Hosting
var newfunction = (money, power) => {
    if(money > power){
    var startingMoney = 5;//<-- we declared startingMoney in side the local scope
    }
    startingMoney = 10000;//<-- However we can reassign it because var is always 
                         //hoisted tp the top
    return startingMoney
};
/*
*Pulling variable & function declarations
Taken to top of their scope
Different types hoisted differently 
Variables: only name
Function: Name and body 
Happens at runtime
Variables
Can be declared anywhere
Available anywhere in scope
Before or after declaration
No value UNTIL assigned
Functions
Can be declared anywhere
Available anywhere in scope
Before OR after Declaration
Assigned value at all time
*/
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";