var aFruits = ['Apple', 'Banana', 'Cherry'];
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing elements
console.log(aFruits[0]); // Output: 'Apple'
// Length of the array
console.log(aFruits.length); // Output: 3
// Print last element
console.log(aFruits[aFruits.length - 1]); // Output: 'Cherry'

// Adding an element
aFruits.push('Mango');
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry', 'Mango']
// Removing the last element
aFruits.pop();
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry']
// Removing the item from middle
aFruits.splice(1, 1); // Removes 'Banana'
console.log(aFruits);   // Output: ['Apple', 'Cherry']
// Adding an item at index 1
aFruits.splice(1, 0, 'Blueberry'); // Adds 'Blueberry' at index 1
console.log(aFruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Iterating over the array - like you do in ABAP - LOOP AT ITAB INTO wa.
for (var i = 0; i < aFruits.length; i++) {
    console.log(aFruits[i]);
}

// Another way of iterating using for..of - wa
for (var fruit of aFruits) {
    console.log(fruit);
}

// String operations 
var sName = "Abhishek Bacchan";

//Split string into array - SPLIT str INTO itab SEPARATED BY space
var aNameParts = sName.split(" ");
console.log(aNameParts); // Output: ['Abhishek', 'Bacchan']

// Join array into string - CONCATENATE itab INTO str SEPARATED BY space
var sJoinedName = aNameParts.join(" ");
console.log(sJoinedName); // Output: 'Abhishek Bacchan'

// Reverse array
aNameParts.reverse();
console.log(aNameParts); // Output: ['Bacchan', 'Abhishek']

// Sort array
aNameParts.sort();
console.log(aNameParts); // Output: ['Abhishek', 'Bacchan']

// Convert a string to upper case
var sUpper = sName.toUpperCase();
console.log(sUpper); // Output: 'ABHISHEK BACCHAN'

// Convert a string to lower case
var sLower = sName.toLowerCase();
console.log(sLower); // Output: 'abhishek bacchan'

// Search a string in another string
var nIndex = sName.indexOf("Bacchan");
console.log(nIndex); // Output: 9
nIndex = sName.indexOf("Singhania");

if (nIndex === -1) {
    console.log("singhania was not found in your name"); // Output: -1    
}else{
    console.log("singhania was found in your name"); // Output: -1    
}
