/*
*Loops:
*loops is Repeating a block of code a set amount of times
*There’s more than 1 kind of loop!
*While loop
*For loop
*For in loop
*/
//1. Explain while, for, and for-in loops
for(var i = 0; i < 5; i++){
    console.log("hello");
}//for loop syntax
for(var key in object){
    console.log(key);
    console.log(object[key]);
}//For in loop
var count = 0; 
while(count < 5){
    console.log(count);
    count++;
}
/*
*for loop: 1.starting condition 2.Stoping Condition 3.Incrementor 4.Code Block
*for-in loop:1. Variable representing a key in the object 2. object to be iterated over
*while Loop:1.Stoppung condition(external counter) 2.Condition 3.statement too run if condition is true
*/
//2.Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
for(var i = 0; i < 5; i++){
    console.log(i);
}
for(var i = 10; i >= -10; i--){
    console.log(i);
}
//3.Loop over an Array, forwards and backwards
for (var i = 0; i < array.length; i++){
   console.log(array[i]);
}//foward
 
for (var i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
}//backwards
//4.Loop over an Object
for(var keys in object){
    console.log(keys);
  }
  var array =0
  var object = 0