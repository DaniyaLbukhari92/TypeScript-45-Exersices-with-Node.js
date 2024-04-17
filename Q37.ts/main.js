// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Calling a function with by defualt valeus
make_shirt();
// Calling function now with medium size and defualt message
make_shirt("Medium");
// Calling a function now with Small size and also diffrent print message
make_shirt("Small", "I Love JavaScript");
