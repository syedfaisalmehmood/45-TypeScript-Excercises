// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//Define function to show magician names
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
//Define function to show phraase "The Great" on each magician names;
function make_great(magicians) {
    return magicians.map(names => `The Great ${names}`);
}
//define a array of magician names
let magician_names = ["Abdul Samad", "Ali Rizwan", "Maaz Siddqui", "Habib", "Sohail"];
//define a variable great magicians to print magician names in the list
let great_magicians = make_great(magician_names);
//print the magician names in the list
show_magicians(great_magicians);
export {};
