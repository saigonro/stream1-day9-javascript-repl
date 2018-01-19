// Adding user input to an array if it is not found in the array

let myArray = ["whiskey1", "whiskey2", "whiskey3", "whiskey4"];

let myFave = prompt("What is your favorite Irish wiskey");

let foundWord = myArray.indexOf(myFave.toLowerCase());

if (foundWord == -1) {
  myArray.push(myFave);
}
else {
  alert("I like it too");
}

console.log(myArray);