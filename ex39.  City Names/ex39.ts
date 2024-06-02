//39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


//creating a function called city_country();
function city_country(city: string, country: string) : string {
    return `${city}, ${country}`;
}

//Calling a function and print the return values
console.log(city_country("Lahore", "Pakistan"))

console.log(city_country("Makkah", "Saudia Arabia"))

console.log(city_country("Kabul", "Afghanistan"))