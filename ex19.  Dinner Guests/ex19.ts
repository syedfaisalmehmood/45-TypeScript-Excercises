//14.  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist: Array<string> = [
  "Maaz Siddiqui",
  "Maaz Khan",
  "Ali Rizwan",
  "Farhan Salim",
  "Habib-ur-Rehman",
  "Muteeb",
  "Shahrukh",
];

// guestlist.forEach((guestlist) =>
// {
// console.log(`Dear ${guestlist},  You are invited for dinner. Please Join us.`)

// }
// )

// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestLength: number = guestlist.length;

console.log(`We have invited total ${guestLength} people in our Dinner Party.`);
