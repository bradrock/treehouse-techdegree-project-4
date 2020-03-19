/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game
 {
     constructor()
     {
        //collection of phrases from which one is selected that the user will have to guess
        this.phrases = [

            "rebound",
            "triple",
            "crossover",
            "dribble",
            "home court"

        ];

        //number of missed/incorrect guesses by the user
        this.missed = 0;

        //the phrase which the user has to guess for the current game
        this.activePhrase = null;
     }

     //Hides the start screen overlay, gets a random phrase, and adds the phrase elements to the display
     startGame()
     {
         const startScreenOverlay = document.getElementById("overlay");
         startScreenOverlay.style.display = "none";
         this.activePhrase = new Phrase(this.getRandomPhrase());
         this.activePhrase.addPhraseToDisplay();
     }

     //Returns a randomly selected phrase from the phrases array.
     getRandomPhrase()
     {
        return this.phrases[Math.floor(Math.random() * (this.phrases.length))];
     }


     
     //Receives the button element of the player's guess and checks whether it exists in the phrase.
     //If yes, shows the guessed letter. If no, calls for a life to be removed.
     //Disables the letter button corresponding to the player's guess and assigns it "chosen" class
     //if guess was a match and "wrong" class if guess was not a match (for display purposes).
     //@param {HTMLElementObject} clickedLetterButton - The letter button corresponding to the player's guess
     handleInteraction(clickedLetterButton)
     {
        clickedLetterButton.disabled = true;
        
        const guessedLetter = clickedLetterButton.innerText;

        if (this.activePhrase.checkLetter(guessedLetter))
        {
            clickedLetterButton.classList.add("chosen");

            this.activePhrase.showMatchedLetter(guessedLetter);

            if(this.checkForWin())
            {
                this.gameOver(true);
            }
        }

        else
        {
            clickedLetterButton.classList.add("wrong");
            this.removeLife();
        }

     }

     //Removes a life (heart) from the player and ends game if none remain
     removeLife()
     {
        
        //iterate through hearts until a live one is found, then replace it with a lost one
        
        const heartElements = document.querySelectorAll('li.tries');
        
        for (var i=0; i < heartElements.length; i++)
        {
            if (heartElements[i].firstChild.getAttributeNode("src").value == "images/liveHeart.png")
            {
                heartElements[i].firstChild.getAttributeNode("src").value = "images/lostHeart.png";
                break;
            }
        }
       
        
        this.missed++;
        
        if(this.missed == 5)
        {
            this.gameOver(false);
        }

     }



     
     //Checks whether player won based on whether any unsolved letters remain in the phrase
     checkForWin()
     {
        const phraseLetterLiElements = document.querySelectorAll('li.letter');
        
        for (var i=0; i < phraseLetterLiElements.length; i++)
        {
            if(phraseLetterLiElements[i].classList.contains("hide"))
            {
                return false;
            }
        }
       
        return true;
     }


     
     //Displays the game over screen with a message corresponding to either a win or loss
     //and then resets the game board in the background
     //@param {boolean} didPlayerWin - True if the player won, false if the player lost
     gameOver(didPlayerWin)
     {
        
        const startScreenOverlay = document.getElementById("overlay");

        const gameOverMessageH1 = document.getElementById("game-over-message");
        startScreenOverlay.classList.remove("start");

        if (didPlayerWin)
        {
            gameOverMessageH1.innerText = "You won! The phrase was " + this.activePhrase.phrase.toUpperCase() + "."; 
            startScreenOverlay.classList.add("win");
        }
        else
        {
            gameOverMessageH1.innerText = "Sorry, better luck next time!"
            startScreenOverlay.classList.add("lose");
        }
        
        startScreenOverlay.style.display = "block";


        //reset the game board
        document.querySelectorAll('#phrase li').forEach(li => li.remove());

        document.querySelectorAll('#qwerty button').forEach(button => 
        {   
            button.classList.remove("chosen", "wrong");

            //prevent user from typing and activating buttons while start screen is showing
            button.disabled = true;
        
        });

        document.querySelectorAll('li.tries').forEach(li => 
        li.firstChild.getAttributeNode("src").value = "images/liveHeart.png");


     }

 }