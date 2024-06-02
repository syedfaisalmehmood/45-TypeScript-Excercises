
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoritetransportation = [];
favoritetransportation.push(["Honda", "Motorcycle", "Red", "2024"]);
favoritetransportation.push(["Hyundai", "Car", "White", "2020",]);
favoritetransportation.push(["Toyota", "Hilux", "Black", "2022"]);
favoritetransportation.push(["Sohrab", "Rikshaw", "Yello", "2023"]);
// console.log(favoritetransportation)
// To print message against each favoritetransportation
favoritetransportation.forEach(([Brand, Transport, Color, Model]) => { console.log(`I would like to own a ${Brand}'s ${Transport} in ${Color} color of model ${Model}.`); });
export {};
