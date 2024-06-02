// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


//Define function to show magician names
function show_magicians(magicians: string[]){
    magicians.forEach(names => console.log(names))
}

//Define function to show phraase "The Great" on each magician names;
function make_great(magicians: string[]){
        return magicians.map(names => `The Great ${names}`);
}


//define a array of magician names
let magician_names = ["Abdul Samad", "Ali Rizwan", "Maaz Siddqui", "Habib", "Sohail"];

//making a copy of original array make_great through the slice function;
let copy_magician_names = magician_names.slice()

//Modify the copied array to add "The Great" with their names;
let copy_great_magicians = make_great(copy_magician_names); 

//show both arrays original & modified

//Original 
show_magicians(magician_names)

//Copy
show_magicians(copy_great_magicians)