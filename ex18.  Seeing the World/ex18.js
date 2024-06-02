
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • 	Store the locations in a array. Make sure the array is not in alphabetical order. --> Done
// • 	Print your array in its original order.  --> Done
// • 	Print your array in alphabetical order without modifying the actual list.  --> Done
// • 	Show that your array is still in its original order by printing it.  --> Done
// • 	Print your array in reverse alphabetical order without changing the order of the original list.  --> Done
// • 	Show that your array is still in its original order by printing it again.  --> Done
// • 	Reverse the order of your list. Print the array to show that its order has changed.  --> Done
// • 	Reverse the order of your list again. Print the list to show it’s back to its original order.  --> Done
// • 	Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • 	Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store the Countries in a array and print them in Original Order.
let favCountries = [
    "Palastine",
    "Turkey",
    "Saudia Arabia",
    "Pakistan",
    "Iraq",
    "Bangladesh",
];
console.log("Original Order", favCountries);
//Print a array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...favCountries].sort());
// Print a Original array to show that the Original array is still in its original order.
console.log("Original array is Still in Original Order:", favCountries);
// Print a array in reversed order without changing the order of the original list.
console.log("Reverse Alphabetical Order without change the Original List:", [...favCountries].reverse());
// Print a array to show that it is still in its original order.
console.log("Original array is Still in Original Order:", favCountries);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original array reversed:", favCountries.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to list in Original Order:", favCountries.reverse());
// Sort array in alphabetical order and Print the the same to show that its order has been changed.
console.log("Sort array in Alphabetical Order:", favCountries.sort());
//Sort  array in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sort array in Reverse Alphabetical Order:", favCountries.reverse());
export {};
