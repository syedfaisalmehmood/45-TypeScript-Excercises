

// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • 	Make a array of your three favorite fruits and call it favorite_fruits.
// • 	Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


//Making an array of favorite fruits
let fav_fruits: string [] = ["Banana", "Mango", "Orange"]

//Using five IF statements (Independent);
if(fav_fruits.includes("Banana")){
   console.log("I really like Bananas.")
}
if(fav_fruits.includes("Cherry")){
    console.log("I really like Cherries.")
}
if(fav_fruits.includes("Apple")){
    console.log("I really like Apples.")
}
if(fav_fruits.includes("Mango")){
    console.log("I really like Mangoes.")
}
if(fav_fruits.includes("Orange")){
    console.log("I really like Oranges.")
}