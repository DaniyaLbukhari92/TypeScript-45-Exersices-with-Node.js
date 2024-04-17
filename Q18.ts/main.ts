//Making a Array of Countries and print its original Order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

//print the Array to Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//show that the Array is still in original order
console.log("Still in Original Order;",countriesToVisit);

//Print a Array in without modifying the actual Array List
console.log("Revers Order:", [...countriesToVisit].reverse());

//show that the Array is still in original order
console.log("Still in Original Order;",countriesToVisit);

//We have changed a Original Array Order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//Print a Aray to show that it back to it's Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());

//Print the Array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//We have changed a Original Array Order now in reverse order Again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());


