function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Poter", "Hamza", "Usman"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
