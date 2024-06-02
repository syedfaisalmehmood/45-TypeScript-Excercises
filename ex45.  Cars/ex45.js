// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//Define a function of car  
function create_car(manufacturer, model, ...options) {
    //Initiate a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add aditional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car option
let my_car = create_car("Toyota", "Corolla", "color: White", "Sunroof: True", "LEDTV: True", "AutoLock: True", "Model_Year: 2023");
//print the variable to ensure all the information is stored correctly in the car object;
console.log(my_car);
export {};
