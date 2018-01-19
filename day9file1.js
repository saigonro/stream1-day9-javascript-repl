let myArray = ["stud1", "stud2", "stud3", "stud4"];

for(let s in myArray) {
  console.log(myArray[s]);
}

let theWord = myArray.indexOf("stud3");
console.log(theWord);



let students = ["Anne Marie", "Arne", "Colm", "Cristian", "Dan", "Jordan", "Krishen", "Nichola", "Rebecca", "Stephen"];

let studentsBackwards = [];

for (let s = students.length - 1; s >= 0; s--) {
  console.log(students[s]);
  studentsBackwards.push(students[s]);
}

for (let sb in studentsBackwards) {
  console.log("=== " + studentsBackwards[sb]);
}