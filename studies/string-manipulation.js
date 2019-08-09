/**
*String-Maninpulation:
*0. string manuplationg means to change the string with operators and string 
* method
*/
//1. with operators 
var abe = "hello";
var bel = "world";
var abell = abe + " " + bel;//<--adding both words 
console.log(abell);//<-- "hello world"
/**
*we can use operators to combine or separate strings
*/
//2. with string methods
//.toLowerCase
var abel = "Hello";
console.log(abel.toLowerCase());//<-- "hello"
//toUpperCase
var leba = "myworld";
console.log(leba.toUpperCase());//<-- "Myworld"
//the lenght of a string
var name = "cain";
console.log(name.length); //<-- prints 4
//slice method
var str = "Apple, Banana, lime";
console.log(str.slice(7, 13)); //<--prints Banana
//replace method
var sentence = "Have a bad day!";
console.log(sentence.replace("bad", "nice")); //<--prints "Have a nice day!"
//concat
var str1 = "Tupac";
var str2 = "is the best";
console.log(str1.concat(" ", str2)); //<-- prints "Tupac is the best"
//charAT
var string = "Wowzer";
console.log(string.charAt(3)); //<--prints "z"
//indexOf
var string1 = "Yo What's up";
console.log(string1.indexOf("up")); //<-- prints 10
/**
*we use string method to alter the string
*/