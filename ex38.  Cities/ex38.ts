// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


//Create a function call describe_City
function describe_City(City: string, Country: string = "Pakistan"){
    console.log(`${City} is in ${Country}`)
}
//calling a function such as "Karachi is in Pakistan";
describe_City("Karachi")


describe_City("Lahore")

describe_City("Madinah", "Kingdom of Saudia Arabia")