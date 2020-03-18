/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//variable declaration for the Game instance that will be assigned in the startButton event listener
let activeGame = null;

const qwertyDiv = document.getElementById("qwerty");

const startButton = document.getElementById("btn__reset");



//Event listener for the start button
//Resets conditions from the previous game and starts a new game
startButton.addEventListener('click', () => {

    document.querySelectorAll('#phrase li').forEach(li => li.remove());

    document.querySelectorAll('#qwerty button').forEach(button => 
        {   
            button.classList.remove("chosen", "wrong");
            button.disabled = false;
        
        });

    document.querySelectorAll('li.tries').forEach(li => 
        li.firstChild.getAttributeNode("src").value = "images/liveHeart.png");
  
    activeGame = new Game();

    activeGame.startGame();

    document.getElementById("overlay").classList.remove("win", "lose");
    
});


qwertyDiv.addEventListener('click', (event) => {

    if (event.target.tagName == 'BUTTON')
    {
        activeGame.handleInteraction(event.target);
    }

});


//Listen for keydown event--if the key pressed was a letter, find the corresponding button element
//and pass that element to the activeGame's handleInteraction method

document.addEventListener('keydown', (event) => {

    const code = event.keyCode;
    
    const alphabetEx = /[a-zA-Z]/;

    if (alphabetEx.test(String.fromCharCode(code)))
    {
        const typedLetter = String.fromCharCode(code).toLowerCase();


        document.querySelectorAll('#qwerty button').forEach(button => 
            {
                if (button.innerText == typedLetter && button.disabled == false)
                {
                    activeGame.handleInteraction(button);
                }

            });
    }
});


