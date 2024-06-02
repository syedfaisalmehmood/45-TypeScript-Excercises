
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Case details is mentioned below;
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
{
  //example # 1 --> for lowercase of title name
  let myname = "Syed Faisal mehmood";
  let lowercase = myname.toLowerCase();
  console.log(lowercase);
  //example # 2 --> for UPPERCASE of title name
  let uppercase = myname.toUpperCase();
  console.log(uppercase);
  //example # 3 --> for TitleCase of Title name
  let mynamesplit = myname.split(" ");
  let titlecasename = "";
  for (let i = 0; i < mynamesplit.length; i++) {
    titlecasename +=
      mynamesplit[i].charAt(0).toUpperCase() +
      mynamesplit[i].slice(1).toLowerCase() +
      " ";
  }
  console.log(titlecasename);
}
export {};
