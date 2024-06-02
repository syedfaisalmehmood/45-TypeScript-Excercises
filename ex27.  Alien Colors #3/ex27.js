
// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • 	If the alien is green, print a message that the player earned 5 points.
// • 	If the alien is yellow, print a message that the player earned 10 points.
// • 	If the alien is red, print a message that the player earned 15 points.
// • 	Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Version --> 1 --> define variable "alien_Color".
let alien_Color1 = "Green";
// Using if and Else-If statement; 
if (alien_Color1 == "Green") {
    console.log("Version --> 1 -->\t You have earned 05 Points becuase you Shot Down Green Alien.");
}
else if (alien_Color1 == "Yellow") {
    console.log("Version --> 1 -->\t You have earned 10 Points because you Shot Down Yellow Alien.");
}
else if (alien_Color1 == "Red") {
    console.log("Version --> 1 -->\t You have earned 15 Points because you Shot Down Red Alien.");
}
//Version --> 2 --> define variable "alien_Color".
let alien_Color2 = "Yellow";
// Using if and Else-If statement; 
if (alien_Color2 == "Green") {
    console.log("Version --> 2 -->\t You have earned 05 Points becauase you Shot Down Green Alien.");
}
else if (alien_Color2 == "Yellow") {
    console.log("Version --> 2 -->\t You have earned 10 Points becasue you Shot Down Yellow Alien.");
}
else if (alien_Color2 == "Red") {
    console.log("Version --> 2 -->\t You have earned 15 Points because you Shot Down Red Alien.");
}
//Version --> 3 --> define variable "alien_Color".
let alien_Color3 = "Red";
//Using if and Else-If statement;
if (alien_Color3 == "Green") {
    console.log("Version --> 3 --> \t You have earned 05 Points because you Shot Down Green Alien.");
}
else if (alien_Color3 == "Yellow") {
    console.log("Version --> 3 --> \t You have earned 10 Points becasue you Shot Down Yellow Alien.");
}
else if (alien_Color3 == "Red") {
    console.log("Version --> 3 --> \t You have earned 15 Points becuase you Shot Down Red Alien.");
}
export {};
