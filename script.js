"use strict";
// Lesson 107

// Short Circuiting (&& and ||)
console.log("---- OR ----");
// Use ANY data type, return ANY data type, shor-circuiting

console.log(3 || "Emas");
console.log("" || "Emas"); // "" falsy value; It returs the truthy value
console.log(true || 0);
console.log(undefined || null); // undefinied is a falsy value

console.log(undefined || 0 || "" || "Hello" || 23 || null);

console.log("---- AND ----");

console.log(0 && "Emas");
console.log(7 && "Emas");

console.log("Hello" && 23 && null && "Emas");

// The OR OPERATOR will return THE FIRST TRUTHY VALUE OF ALL THE OPERANDS, or simply THE LAST VALUE IF ALL OF THEM ARE FALSY

// The AND OPERATOR will return THE FIRST FALSY VALUE or THE LAST VALUE IF ALL OF THEM ARE TRUTHY.
