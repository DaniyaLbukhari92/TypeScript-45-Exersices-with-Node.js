function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));

}
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}

let magician_names = ["Harry Poter", "Hamza", "Usman"];

let great_magicians = make_great(magician_names);


console.log(great_magicians);