function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Poter", "Hamza", "Usman"];
var copy_magician_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
console.log("Original Array\n");
show_magicians(magician_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
