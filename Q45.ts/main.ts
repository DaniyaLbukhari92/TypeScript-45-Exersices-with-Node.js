// Define a function to create a car object eith optional option...
function create_car(manufacturer, model, ...option){
    //Initialze a car object with manufacturer and model
    let car = {
            manufacturer: manufacturer,
            model: model

    };

    //Add additional options to the car object
    option.forEach(option =>{
        let [key, value] = option.split(":")
        car[key.trim()] = value.trim();
        
    })

    return car;
}

//Call te function to create a car object
let my_car = create_car("Toyota", "Corrolla", "color: Black", "sunroof: True", "Year: 2024")

console.log(my_car);
 