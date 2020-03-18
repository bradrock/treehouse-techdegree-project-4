/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase
 {
    constructor(phrase)
    {
        this.phrase = phrase.toLowerCase();
    }

    //Sets up the li elements corresponding to the tiles for the phrase to be guessed
    addPhraseToDisplay()
    {
        
        const phraseUl = document.querySelector('#phrase ul');
        
        this.phrase.split("").forEach(char => 
            {
                const phraseCharLi = document.createElement('LI');

                phraseCharLi.innerText = char;
                
                if (char === " ")
                {
                    phraseCharLi.classList.add("space");
                }

                else
                {
                    phraseCharLi.classList.add("hide", "letter", char);
                }

                phraseUl.appendChild(phraseCharLi);

            }
        )
    }

    //Checks whether a letter (@param {char} letter) is part of the phrase
    checkLetter(letter)
    {
        if (this.phrase.includes(letter))
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    //Changes the "tile" of an unsolved letter (@param {char} letter) to one that shows the letter to the user
    showMatchedLetter(letter)
    {
        
        document.querySelectorAll('li.' + letter).forEach(li => 
            {
                li.classList.remove('hide');
                li.classList.add('show');
            
            
            });
        
    }

 }