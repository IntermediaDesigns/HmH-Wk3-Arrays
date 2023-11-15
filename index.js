// Generate random array numbers
const randomNumsButton = document.querySelector('.randomNums');
const showRandomDiv = document.querySelector('#showRandom');
const randomArrayP = document.querySelector('#randomArray');
const buttonList = document.querySelector('#buttonList');

// Hide the button list
buttonList.style.display = 'none';

function generateRandomNumbers() {
    let randomNumbers = [];
    for(let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return randomNumbers;
}

function displayRandomNumbers() {
    let randomNumbers = generateRandomNumbers();
    randomArrayP.textContent = `[${randomNumbers.join(', ')}]`;

    // Show the button list and hide the randomNumsButton after generating the numbers
    buttonList.style.display = 'block';
    randomNumsButton.style.display = 'none';
}

randomNumsButton.addEventListener('click', displayRandomNumbers);


// Display the first number
