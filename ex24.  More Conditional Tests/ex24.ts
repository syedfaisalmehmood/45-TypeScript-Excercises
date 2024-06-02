// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • 	Tests for equality and inequality with strings
// • 	Tests using the lower case function
// • 	Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • 	Tests using "and" and "or" operators
// • 	Test whether an item is in a array
// • 	Test whether an item is not in a array

let mango = "Mango";
let uppperCaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["Mango", "Apple", "Banana", "Papaya", "Orange"];

//Tests for equality and inequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "Mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango != "Mango");

// \n\tTests using the lower case function
console.log("\nIs MANGO is equal to mango after converting in UPPERCASE.");
console.log(uppperCaseMango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting in lowercase?");
console.log(uppperCaseMango.toLowerCase() != "mango");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Test Inequality case
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Test Equality case
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Test Greater than case
console.log("\nIs twenty is greater than ten?");
console.log(twenty > ten);

//OR
console.log("\nIs ten is freater than Zero?");
console.log(ten > 0);

//Test less than case.
console.log("nIs ten is lesss than eleven?");
console.log(ten < 11);

//OR
console.log("\nIs ten is less than twenty?");
console.log(ten < twenty);

//Test Greater Than or equal to case;
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//OR
console.log("\nIs 5 is greater than or equal to ten?");
console.log(5 >= ten);

//Test Less Than or equal to case;
console.log("\n Is twenty is less than or equal to ten?");
console.log(twenty <= ten);

//OR
console.log("\n Is ten is less than or equal to twenty?");
console.log(ten <= twenty);

//Tests using "and" and "or" operators

//Using and "&&" operator cases;
console.log("\n twenty is not equal to 10 and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

//OR
console.log("\n twenty is not equal to 10 and twenty is less than ten");
console.log(twenty != ten && twenty < ten);

//Using or "||" operator cases;
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("\n twenty is greater than 50 or 20 is not equal to 20");
console.log(twenty > 50 || twenty != 20);

// Test whether an item is in a array
console.log("\n Is Orange inlculde in my fruits array?");
console.log(fruits.includes("Orange"));

// // Test whether an item is not in a array
console.log("\n Is Orange not include in my fruits array?");
console.log(fruits.includes("Orange"));
