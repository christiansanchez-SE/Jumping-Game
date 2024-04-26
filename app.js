let character = document.getElementById("character");
let block = document.getElementById("block");

function jump () {
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout (function() {
        character.classList.remove("animate")
    }, 500);    
}

let checkDead = setInterval (function(){

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 76 && blockLeft > 0 && characterTop >= 231){
        block.style.animation = "none";
        // block.style.display = "none";
        alert("You Lose!");
        location.reload();
    }
}, 10);

// Pausing the game

// let isPaused = false;

// document.addEventListener('keyup', function(e){
//     if(e.which === 32)
//     {
//         if(isPaused) resumeGame();
//         else pauseGame();
//     }
// });

// function pauseGame(){
//     clearInterval(interval);
//     isPaused = true;
// }

// function resumeGame(){
//     isPaused = false;
//     interval = setInterval(runGame,20);
// }