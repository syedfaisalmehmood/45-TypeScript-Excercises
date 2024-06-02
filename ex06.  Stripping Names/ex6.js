//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Case # 1 (for around whitespace characters)
let personsName = "\t Syed Faisal Mehmood \n";
console.log("Name with Whitespace:", personsName);
// Case # 2 (for stripped Names)
let StrippedName = personsName.trim();
console.log("Stripped Name:", StrippedName);
export {};
