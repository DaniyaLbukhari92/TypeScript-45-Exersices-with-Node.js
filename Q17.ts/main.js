//Creating a Guest List Array
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
//Making Variable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Usama");
//Print message to updated List
console.log("Uptadet List of our Guests");
//Sending a Invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me ?")); });
//inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can invite only two Guest to Dinner with me");
//Using while loop to remove guest from the Array untill only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " I cant invite you to Dinner"));
}
//Sending a invitaions to the last two on the list
console.log("Invitations to the last two Guest");
guestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to Dinner")); });
//Removing last two guest from the list
guestList.pop();
guestList.pop();
//Print a Empty List
console.log("Empty List:", guestList);
