var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Aaa sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
