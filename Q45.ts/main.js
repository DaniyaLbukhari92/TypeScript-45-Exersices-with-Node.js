// Define a function to create a car object eith optional option...
function create_car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    //Initialze a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional options to the car object
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call te function to create a car object
var my_car = create_car("Toyota", "Corrolla", "color: Black", "sunroof: True", "Year: 2024");
console.log(my_car);
