// Compare 2 arrays(with indexOf, push elements from 1 array to another

/*
   1. split myString on the space into an array called myArray 
   Iterate over checkArray using a for loop
   Inside the for loop, use .indexOf to see if the word at the current index of checkArray is in myArray (Remember indexOf returns -1 if it can't find the word)
   If the word is not in myArray, push it on to the end.
*/

let myString = "Oh what a beautiful morning";
//let myArray = ["Oh", "what", "a", "beautiful", "morning"];
let checkArray = ["Oh", "it", "is", "beautiful", "today"];

// 1.
let myArray = myString.split(" ");

// 2.
for (let ca in checkArray) {
  if (myArray.indexOf(checkArray[ca]) == -1) {
    myArray.push(checkArray[ca]);
  }
}

console.log(myArray);