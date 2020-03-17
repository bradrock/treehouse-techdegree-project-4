/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase
 {
    constructor(phrase)
    {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay()
    {
        //get phrase ul
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

    showMatchedLetter(letter)
    {
        
        document.querySelectorAll('li.' + letter).forEach(li => 
            {
                li.classList.remove('hide');
                li.classList.add('show');
            
            
            });
        
        /*const matchedLiElements = document.querySelectorAll('li.' + letter);
        
        //come back later and try writing this as a forEach loop
        for (i=0; i < matchedLiElements.length; i++)
        {
            matchedLiElements[i].classList.remove('hide');
            matchedLiElements[i].classList.add('show');
        }
        */
    }

 }