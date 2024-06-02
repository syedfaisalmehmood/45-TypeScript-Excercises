// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. --> Done

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. --> Done

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// creating array of Guest List.

let guestList: Array<string> = ["Faisal", "Hamza", "Imran", "Huzaifa"];

// delete guest No. 02 from the array.
let dontCome = guestList[2];

// print the message for Guest NO. 2 that he will not join the Dinner Party.
console.log(dontCome, "will not Join us in the Dinner Party.");

// Add and Remove the values
guestList.splice(0, 0, "Muhammad Umer");

// Print the message for Big Table Dinner
console.log(
  "Hello Guys, We would like to inform you that we have arranged a Big Table Dinner Party for you."
);

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
guestList.forEach((oneGuest) =>
  console.log(
    `As Salam o Alaiykum, Dear Mr. ${oneGuest}, would you like to Dinner with us today at our Place.`
  )
);

//Add a new line that prints a message saying that you can invite only two people for dinner --> Done
console.log(
  "Hello Guys! Unfortunately, we would like to announce that Dinner Table is not arrived on time that's why we can invite only Two perople for Dinner. "
);

//Using while loop to remove guests from the list  until only two names remain in list. and Print a message to them.
while (guestList.length > 2) {
  let removeGuest = guestList.pop();
  console.log(
    `Sorry ${removeGuest}, I can't be able to invite you in Dinner Party.`
  );
}
// Printing a message to each of the two people still on the list, letting them know they’re still invited.
console.log("Revised Invitation to the last 2 person for Dinner Party.");
guestList.forEach((lastTwo) =>
  console.log(
    `Good News ${lastTwo}, You are still invited in the Dinner Party.`
  )
);

// Removing last 2 guest form the list.
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);
