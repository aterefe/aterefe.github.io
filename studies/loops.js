/**
 * Loops:loops is Repeating a block of code a set amount of times. There’s more 
 * than 1 kind of loop!
 * For loop: 1.starting condition 2.Stoping Condition 3.Incrementor 4.Code Block
 * you use this when dealing with array.
 * A for loop loop through the array and access all the element in the array.
 * For-in loop: 1. Variable representing a key in the object 2. object to be 
 * iterated over you use this dealing with objects. A for in loop can be useful
 * when accessing all the key or value in the object, and assing new keys and 
 * variable in an object.
 * While Loop:1.Stopping condition(external counter) 2.Condition 3.statement too
 * run till it meet the stopping condition.
 * Also, you need to increment or else you'll have an infinty loop that'll crash
 * the workspace.
*/
//1. Explain while, for, and for-in loops
var arr = ["wow", 6, "amazing", 3];
for(var idd = 0; idd < 5; idd++){ //if the index is less than five 
    console.log("hello");   //<-- prints "hello"
}

//for in loop syntax
var obj1 = {name: 'leba', DOB: 2028, color: "purple"}; 
for(var key in obj1){ //if the key is in the object
    console.log(key);   //<-- prints key 
    console.log(obj1[key]);//<--prints value
}
//For while loop
var count = 0; //count is equal to zero
while(count < 5){ //stop at 4 because count is less than 5
    console.log(count); //prints 1 2 3 4 
    count++; //increment cout by 1
}
//2.Be able to loop any number of times, forward counting up to some limit, 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//backward counting down to 0
for(let i = 0; i < 5; i++){
    console.log(i); //<-- prints 4 3 2 1
}

//3.Loop over an Array, forwards and backwards
for(let id = 10; id >= -10; id--){
    console.log(id); //10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10
}
//4.Loop over an Object
var obj = {name: "abel", DOB: "may1998"};
for(var keys in obj){
    console.log(obj[keys]);//<-- "abel" "may1998"
  }