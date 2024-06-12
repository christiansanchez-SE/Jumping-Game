// These line selects an HTML element with the id and assigns it to the variable
const character = document.getElementById("character");
const block = document.getElementById("block");
const playerScoreDisplay = document.getElementById("playerScore");
const jumpButton = document.getElementById("jumpButton");


// let playerScore = 0; This variable playerScore keeps track of the player's score and initializes it to 0
let playerScore = 0;

// function updateScoreDisplay() {...} This function updates the displayed score on the webpage. It sets the text content of the element assigned to playerScoreDisplay to the current value of playerScore
function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
}

// function jump() {...} This function is called when the player clicks on the "jumpButton". It adds an "animate" class to the character element for a short period, making it appear as if it's jumping
function jump() {
  // if (!character.classList.contains("animate")) { ... } This line checks if the character element does not currently have a class named "animate"
  // character.classList.contains("animate") This method checks if the character element's class list includes the class "animate"
  // ! (not operator) This negates the condition. So, if the character element does not have the "animate" class, the code inside the if block will run
    if (!character.classList.contains("animate")) {
      // character.classList.add("animate"); If the character element does not have the "animate" class, this line adds the "animate" class to the element
      // Adding this class will trigger CSS animations defined in the stylesheet
      character.classList.add("animate");
      // setTimeout(function () { ... }, 500); This sets a timer to run a function after 500 milliseconds (0.5 seconds)
      // function () { ... } This is an anonymous function that will be executed after the timer complete
      setTimeout(function () {
        // character.classList.remove("animate");: Inside the anonymous function, this line removes the "animate" class from the character element
        character.classList.remove("animate");
      }, 500);
    }
  }

  // jumpButton.addEventListener("click", jump); This line adds an event listener to the jumpButton element. When clicked, it triggers the jump function
  jumpButton.addEventListener("click", jump);

  // let checkCollision = setInterval(function () {...}, 10); - This sets up a function that runs every 10 milliseconds (10ms). Inside this function, it checks if there's a collision between the character and the block, or if the block has passed the character
  let checkCollision = setInterval(function () {
    // let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); This line gets the current position of the character from the top of the screen
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    // let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); This line gets the current position of the block from the left side of the screen
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
  
    // If the block is in a certain range from the character (vertically) and the block's left position is within a specific range, it means the character has collided with the block, resulting in a game over alert and a page reload
    if (blockLeft < 76 && blockLeft > 0 && characterTop >= 200) {
      block.style.animation = "none";
      alert("Game Over!");
      location.reload();
      // If the block has passed the character (left of the character's position), the player's score is incremented, and the score display is updated
    } else if (blockLeft < 0) {
      playerScore++;
      updateScoreDisplay();
    }
  }, 10);