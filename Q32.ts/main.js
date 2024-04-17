//Array Current Users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
//Array New Users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "AreeBa"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condistion for user name already existand save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print diffrent messages using if-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
