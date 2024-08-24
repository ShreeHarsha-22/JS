"use strict"; // -> treat all code as newer version of JS
// -> we don't have to use it now, automatically JS takes care of it internally, But a good practice is to write it
//alert("Hello") // We're using NodeJS, Not browser-> Error -- Because we dont have a HTML code/JS Engine to run this
//Readability is of high importance, So consider using ";"
//Most of the documentation is good in MDN
//official is tc39.es
let name = 'Harsha' // -> String Datatype
let age = 3 // -> Number Datatype
let isLoggedin = false // -> Boolean Datatype
//Primtive Datatypes :- 
//Number(DataType) -> Range -> 2^53
//bigint(DataType) -> Range -> also greater than 2^53 numbers
//String(DataType) -> ''/""
//boolean(DataType) -> true/false;
//null(DataType) -> standalone value
let state = null; // -> null is like a value. Like EMPTY 
//undefiend(DataType) -> When value is not assigned
//symbol(DataType) -> Unique Identifier

//object
console.log(typeof "harsha") //Output :- string
console.log(typeof age) //Output :- number
console.log(typeof null) //Output :- object
console.log(typeof undefined) //Output :- undefined