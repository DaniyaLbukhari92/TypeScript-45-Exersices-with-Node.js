let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Aaa sakta");

guestList.splice(0, 1,"Amir");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));

