// Creating a Array
let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser} ,would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser} ,Thank you for logging in again`)
    }
})