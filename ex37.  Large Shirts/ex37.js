// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//making a function make_shirt;
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`You have selected ${size} size Shirt with message a print ${printMessage} on it.`);
}
// Call the function with by default values
make_shirt();
//Call the function now with medium size and default message 
make_shirt("Medium");
//Call the funcion now with any size with a different message;
make_shirt("Any", "Pakistan Zindabad....!");
export {};
