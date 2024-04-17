//Creating a Guest List Array
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

//Making Variable for those guest who cant come
let dontCome = guestList[0];

//Print the name of guest who cant come
console.log(dontCome, "nahi aa skte hian");

//Modifieng Array
guestList.splice(0, 1, "Amir");

//Message printed for nigger table
console.log("Good News ! we have Found a bigger table for a Dinner");

//Add a new value at starting index of Array
guestList.unshift("Ali");

//Adding a new Value at ending index of Array
guestList.push("Zain");

//Get a middle index our guest list of Array
let middleIndex: number = Math.floor(guestList.length / 2); 

//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Usama");

//Print message to updated List
console.log("Uptadet List of our Guests");

//Sending a Invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me ?`));

