let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];

userNames = []

if (userNames.length === 0){
    console.log("Your Array is Empty We Need to find some users!")
}else{
    // Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " ,would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " ,Thank you for logging in again"));
    }
});
}
