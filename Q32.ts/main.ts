//Array Current Users
let current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];

//Array New Users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "AreeBa"];

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a condistion for user name already existand save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    //Print diffrent messages using if-Else statements
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})