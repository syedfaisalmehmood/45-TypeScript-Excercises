// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//define a function with rest parameters that accept items arguments repesenting our sandwich;
function make_Sandwich(...items: string[]){
    console.log("\nMaking a Sandwich with including following items: \n");

    items.forEach(singleItem => console.log("-->" + singleItem));

    console.log("\nNow Enjoy Sandwich");

}

//Call the function 3 times with 3 different number of arguments
make_Sandwich("Bread", "Chicken", "Egg", "Ketchup", "Mayonnise", "Cheese", "IceBerg", "Chicken Spread");
make_Sandwich("Bread", "Egg", "Butter", "Sauce")
make_Sandwich("Bread", "Chicken Tikka", "Egg", "Tomato", "IceBerg", "Ketchup")