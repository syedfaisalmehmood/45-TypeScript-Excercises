// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, printMessage: string,) {
    console.log(`You have selected ${size} size T-Shirt with message ${printMessage} print on it.`)
}

make_shirt("Large", "Governor Initiative Student")

make_shirt("Small", "Code with Faisal")