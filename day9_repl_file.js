// Adding user input to an array if it is not found in the array

// let myArray = ["whiskey1", "whiskey2", "whiskey3", "whiskey4"];

// let myFave = prompt("What is your favorite Irish wiskey");

// let foundWord = myArray.indexOf(myFave.toLowerCase());

// if (foundWord == -1) {
//   myArray.push(myFave);
// }
// else {
//   alert("I like it too");
// }

// console.log(myArray);

// ======================================================================================================

// let mySentence = "";

// for (let i in myArray) {
//   mySentence += myArray[i] + " ";
// }

// console.log(mySentence);

// ======================================================================================================

// var profile = "I am a web developer developing in html css and javascript. I love JavaScript and doughnuts";
// var stops = ["i", "am", "a", "and"]; // words to be removed
// var newArray = [];

// var lowprofile = profile.toLowerCase();

// let profileArray = lowprofile.split(" ");

// for (let pA in profileArray) {
//   if (stops.indexOf(profileArray[pA]) == -1) {
//     newArray.push(profileArray[pA]);
//   }
// }

// let mySentence = "";

// for (let pA in newArray) {
//   mySentence += newArray[pA] + " ";
// }

// console.log(mySentence);

// ========================================================================================================

// Shorter way of doing it 

// let profile = "I am a web developer developing in html css and javascript. I love JavaScript and doughnuts.";
// let stops = ["i","am","a","and"]; //words to be removed from profile
// profile = profile.toLowerCase();
// let profileArray = profile.split(" ");
// let newProfile = "";
// for (let x in profileArray) {
//   if (stops.indexOf(profileArray[x]) == -1) {
//     newProfile += profileArray[x] + " ";
//   }
// }
// console.log(newProfile);

// =========================================================================================================
// do-while loop
// let counter = 1;
// do {
//   console.log("yay!");
//   counter++;
// }
// while (counter <= 10);

// while loop
// while (counter <= 10) {
//   console.log("yay!");
//   counter++;
// }

// for (;counter <= 10;) {
//   console.log("yay!");
// }

// =========================================================================================================

// Multiplication table
// var num = prompt("insert number");
// function myFunction(num) {
//   for (i=1; i<=10; i++) {
//     console.log(i*num);
//   }
// }
// myFunction(num);

// ========================================================================================================
// Age checker

// function ageCheck(age) {
//   if (age >= 18) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// myAge = prompt("What is your age?");

// if (ageCheck(myAge)) {
//   alert("Welcome to the pub!");
// }
// else {
//   alert("McDonalds is across the street");
// }

// =========================================================================================================
// Return the largest number

// let num1 = prompt("type a number");
// let num2 = prompt("type another number");

// function max(num1, num2) {
// 	if (num1 > num2) {
// 		return num1;
// 	}
// 	else {
// 		return num2;
// 	}
// }

// max(num1, num2);

// ============================================================================================================

// let letter = prompt("Type a letter!");

// function letterChecker(letter) {
// 	let vowelArrey = ["a", "e", "i", "o", "u"];
// 	for (var v in vowelArrey) {
// 		if (vowelArrey.indexOf(letter[v]) == -1) {
// 			return false;
// 		}
// 		else {
// 			return true;
// 			console.log("vowel " + letter);
// 		}
// 	}
// }

// letterChecker(letter);

// if (letterChecker(letter)) {
// 	console.log("vowel " + letter);
// }
// else {
// 	console.log("consonant " + letter);
// }


// ==============================================================================================================

// function new_max(num1, num2, num3) {
// 	var max_num = Math.max(num1, num2, num3);
// 	return max_num;
// }

// new_max(10,2,4);

// function new_max(num1, num2, num3) {
// 	if (num1 > num2 && num1 > num3) {
// 		return num1;
// 	}
// 	else if (num2 > num1 && num2 > num3) {
// 		return num2;
// 	}
// 	else if (num3 > num1 && num3 > num2){
// 		return num3;
// 	}
// 	else {
// 		console.log("I have no clue!");
// 	}
// }

// new_max(4,1,2);

// ======================================================================================================================
// Call back functions

// function wotDayIsIt(callback) {
// 	var day = (new Date().getDay());
// 	callback(day);
// }

// function dayOfWeek(day) {
// 	if (day === 0 || day === 6) {
// 		console.log("It's the weekend!");
// 	}
// 	else {
// 		console.log("It's weekday!");
// 	}
// }
// wotDayIsIt(dayOfWeek);

// ==============================================================================================================

// Annonymous self executed function
// (function() {
// 	function multiply(n) {
// 		for (let i = 1; i <= 10; i++) {
// 			console.log(i * n);
// 		}
// 	}
// 	multiply(5);
// })();

// ==================================================================================================================

// Objects

// let somethingRed = prompt("Enter something red");

// let superhero = {
// 	firstName: "Clark",
// 	secondName: "Kent",
// 	title: "Superman",
// 	[somethingRed]: "Red",
// 	"known as": "Cool boy",
// 	whoAmI: function() {
// 		return superhero.firstName + " " + superhero.secondName + " " + superhero["title"] + " " + superhero["known as"];
// 	}
// };

// console.log(superhero.firstName + " " + superhero.secondName + " " + superhero["title"] + " " + superhero["known as"]);

// console.log(" ===== " + superhero.whoAmI());

// console.log(somethingRed);
// console.log(superhero[somethingRed]);
// console.log(superhero);

// =======================================================================================================

// let somethingRed = prompt("Enter something red");

// let superhero = {
// 	firstName: "Clark",
// 	secondName: "Kent",
// 	title: "Superman",
// 	//[somethingRed]: "Red",
// 	isWearingSuit: false,
// 	suitUp: function() {
// 		if (superhero.isWearingSuit) {
// 			return "I'm wearing my suit";
// 		}
// 		else {
// 			superhero.isWearingSuit = true;
// 			return "Oh no truble again ...";
// 		}
// 	}
// };

// console.log(superhero);
// console.log(superhero.suitUp());
// console.log(superhero.suitUp());
// console.log(superhero);

// ============================================================================================================

// The challenge

let motorbike = {
	color: "yellow",
	cc: 650,
	wheels: 2,
	engineStarted: false,
		
	startEngine: function() {
		if (motorbike.engineStarted) {
			return "I'm true";
		}
		else {
			motorbike.engineStarted = true;
			return "I'm false.";
		}
	},
}

console.log(motorbike);
console.log(motorbike.startEngine());
console.log(motorbike.startEngine());
console.log(motorbike);

// ======================================================================================================

