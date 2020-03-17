/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let activeGame = null;

const qwertyDiv = document.getElementById("qwerty");

const startButton = document.getElementById("btn__reset");




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
    
});


qwertyDiv.addEventListener('click', (event) => {

    if (event.target.tagName == 'BUTTON')
    {
        activeGame.handleInteraction(event.target);
    }

});








