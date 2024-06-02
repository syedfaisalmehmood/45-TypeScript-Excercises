// 35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • 	Modify your program to print a statement about each animal, such as A dog would make   a great pet.
// • 	Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//create an array for making the list of Pet Animals;
let pet_Animals = ["Cat", "Dog", "Rabbit"];
//Using For-Loop to print animal names.
for (let one_animal of pet_Animals) {
  //print a statement about each Pet animal.
  console.log(`A ${one_animal} would make a great Pet.`);
}
//Print a line at the end of program about what these animals have in common;
console.log("Any of these animals would make a great pet!");
export {};
