// Generate random array numbers
const randomNumsButton = document.querySelector('.randomNums')
const showRandomDiv = document.querySelector('#showRandom')
const randomArrayP = document.querySelector('#randomArray')
const buttonList = document.querySelector('#buttonList')

buttonList.style.display = 'none'

let randomNumbers = []

function generateRandomNumbers () {
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1)
  }
}

function displayRandomNumbers () {
  generateRandomNumbers()
  randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`

  buttonList.style.display = 'block'
  randomNumsButton.style.display = 'none'

  updateDropdown()
}

randomNumsButton.addEventListener('click', displayRandomNumbers)

// Display the first number
const firstNumButton = document.querySelector('.firstNum')

function displayFirstNumber () {
  const allBears = randomNumbers.every(num => num === '🐻')

  if (allBears) {
    randomArrayP.textContent = 'No number found in array.'
  } else {
    const firstNumber = randomNumbers.find(num => typeof num === 'number')

    randomArrayP.textContent = `[ ${firstNumber} ]`
  }
  updateDropdown()
}

firstNumButton.addEventListener('click', displayFirstNumber)

// Add a random number to the generated array list
const addNumButton = document.querySelector('.addNum')

function addRandomNumber () {
  let randomNumber = Math.floor(Math.random() * 100) + 1
  randomNumbers.push(randomNumber)
  randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`
  updateDropdown()
}

addNumButton.addEventListener('click', addRandomNumber)

// Change the random array number into bears
const bearButton = document.querySelector('.bear')

function changeNumbersToBear () {
  randomNumbers = randomNumbers.map(() => '🐻')
  randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`
  updateDropdown()
}

bearButton.addEventListener('click', changeNumbersToBear)

// Reverse all the numbers in the array list
const reverseButton = document.querySelector('.reverse')

function reverseNumbers () {
  randomNumbers.reverse()
  randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`
}

reverseButton.addEventListener('click', reverseNumbers)

// Show the highest number from the array
const highNumButton = document.querySelector('.highNum')

/*function highestNumber () {
  let highest = Math.max(
    ...randomNumbers.filter(num => typeof num === 'number')
  )
  randomArrayP.textContent = `[ ${highest} ]`
  updateDropdown()
}*/
function highestNumber () {
  let numbers = randomNumbers.filter(num => typeof num === 'number');
  if (numbers.length === 0) {
    randomArrayP.textContent = "No number found in array.";
  } else {
    let highest = Math.max(...numbers);
    randomArrayP.textContent = `[ ${highest} ]`;
  }
  updateDropdown();
}

highNumButton.addEventListener('click', highestNumber)

// Change random numbers into bubble or stars randomly, removes a number when removeNum is clicked, and alert pops up if there is a bear in the array saying "Can only be performed with an array of all numbers. Please reset!"
const fizzBuzzButton = document.querySelector('.fizzBuzz')

fizzBuzzButton.addEventListener("click", () => {
       let output = [];
       for (let num of randomNumbers) {
         if (num % 3 === 0 && num % 5 === 0) {
           output.push("🫧✨");
         } else if (num % 3 === 0) {
           output.push("🫧");
         } else if (num % 5 === 0) {
           output.push("✨");
         } else {
           output.push(num);
         }
       }
       randomNumbers = output;
       randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`;
       updateDropdown();
     });

//10 timed phases of random amount of hearts appear while array is showing
const heartButton = document.querySelector('.heart')
const showHeartsDiv = document.querySelector('#showHearts')

heartButton.style.display = 'wrap'

let randomHearts = []
let keepGeneratingHearts = true

function generateRandomHearts () {
  if (randomNumbers.some(num => isNaN(num))) {
    alert(
      'Super bonus hearts can only be performed with an array of all numbers. Please reset!'
    )
    return
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      if (!keepGeneratingHearts) {
        return
      }
      let numHearts = Math.floor(Math.random() * 100) + 1
      let hearts = ''
      for (let h = 0; h < numHearts; h++) {
        hearts += '❤️'
      }

      showHeartsDiv.textContent = hearts
    }, i * 1500)
  }
}

heartButton.addEventListener('click', generateRandomHearts)

//  Remove a number from a dropdown list of the array numbers displayed and do not show the bubbles 🫧, bears 🐻, and stars ✨

const removeNumDropdown = document.querySelector('.removeNum')

randomNumsButton.addEventListener('click', displayRandomNumbers)
updateDropdown()

function updateDropdown () {
  // Clear the dropdown
  while (removeNumDropdown.firstChild) {
    removeNumDropdown.removeChild(removeNumDropdown.firstChild)
  }

  let defaultOption = document.createElement('option')
  defaultOption.text = 'Remove a number!'
  removeNumDropdown.appendChild(defaultOption)

  for (let i = 0; i < randomNumbers.length; i++) {
    // Check if the array element is a number
    if (!isNaN(randomNumbers[i])) {
      let option = document.createElement('option')
      option.value = randomNumbers[i]
      option.text = randomNumbers[i]
      removeNumDropdown.appendChild(option)
    }
  }
}

removeNumDropdown.addEventListener('change', function () {
  let selectedNumber = parseInt(this.value)

  let index = randomNumbers.indexOf(selectedNumber)
  if (index !== -1) {
    randomNumbers.splice(index, 1)
  }

  randomArrayP.textContent = `[ ${randomNumbers.join(', ')} ]`
  updateDropdown()
})

// Reset the generated array list
const resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', function () {
  randomNumbers = []
  randomHearts = []

  keepGeneratingHearts = false

  showHeartsDiv.textContent = ''

  displayRandomNumbers()
})
