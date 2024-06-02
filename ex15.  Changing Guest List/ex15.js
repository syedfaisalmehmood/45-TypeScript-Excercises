
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. --> done
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let list = ["Faisal", "Hamza", "Huzaifa", "Hassan", "Umer"];
let dontCome = list[3];
console.log(`Mr. ${dontCome}`, "will not join us in the Dinner Party.");
list.splice(3, 1, "Sameer");
list.forEach(guest => console.log(`As Salam o Alaiykum, ${guest}, We would be honored if you could join us for a delightful Dinner Party at our place... `));
export {};
