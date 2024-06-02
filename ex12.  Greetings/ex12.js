//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// create a name array of friends
let names = ["Faisal", "Maaz", "Abdul Samad", "Noman", "Farhan", "Ali Rizwan"];
for (let name of names) {
  //to print a personalized message with the each person's name.
  console.log(
    `Good Morning ${name}, "I hope that you are having the Fantastic day".`
  );
}
export {};
