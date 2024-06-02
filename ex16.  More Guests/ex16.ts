

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// creating array of Guest List.

let guestList: Array<string> = ["Faisal", "Hamza", "Imran", "Huzaifa"];

// delete guest No. 02 from the array.
let dontCome = guestList[2];

// print the message for Guest NO. 2 that he will not join the Dinner Party.
console.log(dontCome, "will not Join us in the Dinner Party.");

// Add and Remove the values
guestList.splice(0, 0, "Muhammad Umer");
 
// Print the message for Big Table Dinner
console.log("Hello Guys, We would like to inform you that we have arranged a Big Table Dinner Party for you.")

// Add a new guest at Starting index of the array
guestList.unshift("S. Mehmood Ali");

// Add a new guest at ending index of the array
guestList.push("Muhammad Hassan");

// Get a middle index of the array
let middleIndex: number = Math.floor(guestList.length / 2);

//Add a new guest at the Middle index of the array
guestList.splice(middleIndex, 0, "Muhammad Hasnain");

// Print message of updated list
console.log("Updated List of our Invited Guests");

// Sending Invitation message to our Guest one by one with their names
guestList.forEach(oneGuest => console.log(`As Salam o Alaiykum, Dear Mr. ${oneGuest}, would you like to Dinner with us today at our Place.`))