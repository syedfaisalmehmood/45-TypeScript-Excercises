// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//Define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an array containing magician names
let magician_names = ["Abdul Samad", "Ali Rizwan", "Maaz Siddqui", "Habib", "Sohail"];

//call the function using array to print each magician name;
show_magicians(magician_names);