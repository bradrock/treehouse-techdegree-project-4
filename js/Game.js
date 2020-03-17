/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game
 {
     constructor()
     {
        this.phrases = [

            "rebound",
            "triple",
            "crossover",
            "dribble",
            "home court"

        ];

        this.missed = 0;

        this.activePhrase = null;
     }




     startGame()
     {
         const startScreenOverlay = document.getElementById("overlay");
         startScreenOverlay.style.display = "none";
         this.activePhrase = new Phrase(this.getRandomPhrase());
         this.activePhrase.addPhraseToDisplay();
     }

     getRandomPhrase()
     {
        return this.phrases[Math.floor(Math.random() * (this.phrases.length))];
     }


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


     removeLife()
     {
        const heartElements = document.querySelectorAll('li.tries');

        //come back later and try writing this as a forEach loop
        //iterate through hearts until a live one is found, then replace it with a lost one
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


     checkForWin()
     {
        const phraseLetterLiElements = document.querySelectorAll('li.letter');
        
        //come back later and try writing this as a forEach loop
        for (var i=0; i < phraseLetterLiElements.length; i++)
        {
            if(phraseLetterLiElements[i].classList.contains("hide"))
            {
                return false;
            }
          
        }

        return true;
     }


     gameOver(didPlayerWin)
     {
        //see if this can be put somewhere else later...maybe outside the class?
        const startScreenOverlay = document.getElementById("overlay");

        const gameOverMessageH1 = document.getElementById("game-over-message");
        startScreenOverlay.classList.remove("start");

        if (didPlayerWin)
        {
            gameOverMessageH1.innerText = "You won!"
            startScreenOverlay.classList.add("win");
        }
        else
        {
            gameOverMessageH1.innerText = "Sorry, better luck next time!"
            startScreenOverlay.classList.add("lose");
        }

        startScreenOverlay.style.display = "block";
     }


 }