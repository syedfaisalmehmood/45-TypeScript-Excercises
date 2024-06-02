//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Case # 1: name show in lowercase
let personname = "Syed faisal Mehmood";
let lowercase = personname.toLowerCase();
console.log(lowercase);
//Case # 2: name show in UPPERCASE
let uppercase = personname.toUpperCase();
console.log(uppercase);
//Case # 3: name show in TitleCase
let words = personname.split(" ");
let titlecasename = "";
for (let i = 0; i < words.length; i++) {
    titlecasename +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecasename);
export {};
