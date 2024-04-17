// Define Variebles
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with string
console.log("is apple equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
// Test using the lowercase functions
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical Testes
// Equals to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not Equals to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// greater then
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
//Less then
console.log("\nIs ten is less then zero?");
console.log(ten < 0);
//Greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
//Greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
//Less then or equal to
console.log("\nIs twenty is less then or equal to 10?");
console.log(twenty <= 10);
//Test using "and" & "or" operations
//using && (and)
console.log("\nIs twenty is not equal to 10 and twenty is greater then 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\nIs twenty is not equal to 10 and twenty is greater then 10?");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether in item is include in Array
console.log("\n Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
//Not Include
console.log("\n Is orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
