// // in hangman generating a random word
// // generate a random student

// const students = [
//   "Lynjai",
//   "Pimpa",
//   "Calypso",
//   "Farhan",
//   "Semesi",
//   "Moreen",
//   "Mohamed",
// ];

// console.log(students);

// // how do we access a single item in an array
// // we access items by their index and we always start counting at 0
// // console.log pimpa

// // console.log(students[1]);

// // how do we add a new student?
// // how can we add Elri to students
// students.push("Elri");

// // how do we remove elri
// students.pop();

// // replacing
// students[4] = "Semsi";

// // console.log(students.indexOf("Semsi"));

// our applications state - dynamic current info
const students = ["Lynjai", "Pimpa", "Calypso"];

// how do we display our state, how do we render it
const listContainer = document.querySelector("#list-container");

function render() {
  // loop through the array and for each item we want to create li and then append to the ol
  // clear out all the old lis
  listContainer.replaceChildren();
  for (let student of students) {
    const li = document.createElement("li");
    li.textContent = student;
    listContainer.appendChild(li);
  }
}

// when a click submit i want tto see console.log that says submit
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function () {
  // we want to console.log the value that the user typed in
  const input = document.querySelector("input");
  // we want to add the new value to our application state which is the array of students
  students.push(input.value);
  input.value = "";
  render();
});

render();

// for of

// const numbers = [1, 45, 3, -4];

// // for(let i = 0; i < nums.length; i++) {
// //     console.log(nums[i])
// // }

// for (let num of numbers) {
//   console.log(num);
// }
