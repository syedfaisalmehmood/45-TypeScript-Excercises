// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • 	If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • 	If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • 	Write one version of this program that runs the if block and another that runs the else block.
// Define variable "alien_color"
let alien_color = "Blue";
if (alien_color === "green") {
    console.log("alien_color is green and you have just earned 5 points for shooting the alien.");
}
else {
    console.log("alien_color isn't green and You have just earned 10 points.");
}
//Secondary version
if (alien_color == "Blue") {
    console.log("My color is Blue, I am came from If Statement.");
}
else {
    console.log("I am came from else Statement.");
}
export {};
