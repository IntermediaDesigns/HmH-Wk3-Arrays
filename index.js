// Generate random array numbers
const randomNumsButton = document.querySelector('.randomNums');
const showRandomDiv = document.querySelector('#showRandom');
const randomArrayP = document.querySelector('#randomArray');
const buttonList = document.querySelector('#buttonList');

// Hide the button list
buttonList.style.display = 'none';

let randomNumbers = []; 

function generateRandomNumbers() {
    for(let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
}

function displayRandomNumbers() {
    generateRandomNumbers();
    randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`;

    // Show the button list and hide the randomNumsButton after generating the numbers
    buttonList.style.display = 'block';
    randomNumsButton.style.display = 'none';
}

randomNumsButton.addEventListener('click', displayRandomNumbers);


// Display the first number
const firstNumButton = document.querySelector('.firstNum');

function displayFirstNumber() {
    const allBears = randomNumbers.every(num => num === "🐻");

    if (allBears) {
        randomArrayP.textContent = "No number found in array.";
    } else {
        const firstNumber = randomNumbers.find(num => typeof num === "number");

        randomArrayP.textContent = `[ ${firstNumber} ]`;
    }
}

firstNumButton.addEventListener('click', displayFirstNumber);


// Add a random number to the generated array list
const addNumButton = document.querySelector('.addNum');

function addRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
    randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;
}

addNumButton.addEventListener('click', addRandomNumber);


// Change the random array number into bears
const bearButton = document.querySelector('.bear');

function changeNumbersToBear() {
    randomNumbers = randomNumbers.map(() => '🐻');
    randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;
}

bearButton.addEventListener('click', changeNumbersToBear);


// Reverse all the numbers in the array list
const reverseButton = document.querySelector(".reverse");

function reverseNumbers() {
       randomNumbers.reverse();
       randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;
}

reverseButton.addEventListener('click', reverseNumbers);

// Show the highest number from the array 
const highNumButton = document.querySelector(".highNum");

function highestNumber() {
       let highest = Math.max(...randomNumbers.filter(num => typeof num === 'number'));
       randomArrayP.textContent = `[ ${highest} ]`;
   }
   
   highNumButton.addEventListener('click', highestNumber);


// Change random numbers into bubble or stars randomly, removes a number when removeNum is clicked, and alert pops up if there is a bear in the array saying "Can only be performed with an array of all numbers. Please reset!"
const fizzBuzzButton = document.querySelector(".fizzBuzz");

let fizzBuzzClicked = false;

function changeRandomNumbers() {
    if (fizzBuzzClicked) {
        return;
    }

    let symbols = ['🫧', '✨'];
    let bearExists = randomNumbers.includes('🐻');
    
    if (bearExists) {
        alert("Can only be performed with an array of all numbers. Please reset!");
        return;
    }

    for(let i = 0; i < randomNumbers.length; i++) {
        if(Math.random() < 0.2) { 
            randomNumbers[i] = symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
    randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;
    fizzBuzzClicked = true;
}

fizzBuzzButton.addEventListener('click', changeRandomNumbers);

//10 timed phases of random amount of hearts appear while array is showing
const heartButton = document.querySelector(".heart");
const showHeartsDiv = document.querySelector('#showHearts');

heartButton.style.display = "wrap";

let randomHearts = []; 

function generateRandomHearts() {
    if (randomNumbers.some(num => isNaN(num))) {
        alert("Super bonus hearts can only be performed with an array of all numbers. Please reset!");
        return;
    }
    for(let i = 0; i < 10; i++) {
        setTimeout(function() {
            let numHearts = Math.floor(Math.random() * 100) + 1;
            let hearts = '';
            for(let h = 0; h < numHearts; h++) {
                hearts += '❤️';
            }
            
            showHeartsDiv.textContent = hearts;
        }, i * 1500);
    }
}

heartButton.addEventListener('click', generateRandomHearts);

//  Remove a number from a dropdown list of the array numbers displayed and do not show the bubbles 🫧, bears 🐻, and stars ✨
const removeButton = document.querySelector(".removeNum");
const dropdown = document.querySelector("#dropdown");

function removeNumbers() {
    if(randomNumbers.length > 0) {
        // Remove a number from the array
        randomNumbers.pop();

        // Update the displayed array
        randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;

        // Remove the last option from the dropdown
        dropdown.remove(dropdown.options[dropdown.options.length - 1]);
    }
}

removeButton.addEventListener("click", removeNumbers);

// Remove the event listeners for the bubbles, bears, and stars buttons
const bearButton = document.querySelector('.bear');
const heartButton = document.querySelector('.heart');

bearButton.removeEventListener('click', bearButtonEventFunction);
heartButton.removeEventListener('click', heartButtonEventFunction);