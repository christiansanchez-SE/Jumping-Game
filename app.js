const character = document.getElementById("character");
const block = document.getElementById("block");
const playerScoreDisplay = document.getElementById("playerScore");
const jumpButton = document.getElementById("jumpButton");

let playerScore = 0;

function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
}


function jump() {
    if (!character.classList.contains("animate")) {
      character.classList.add("animate");
      setTimeout(function () {
        character.classList.remove("animate");
      }, 500);
    }
  }

  jumpButton.addEventListener("click", jump);

  let checkCollision = setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
  
    if (blockLeft < 76 && blockLeft > 0 && characterTop >= 200) {
      block.style.animation = "none";
      alert("Game Over!");
      location.reload();
    } else if (blockLeft < 0) {
      playerScore++;
      updateScoreDisplay();
    }
  }, 10);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
