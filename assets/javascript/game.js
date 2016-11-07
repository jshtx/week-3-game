



//declare variables and arrays
var answers = ["virginia", "texas", "alabama", "alaska", "colorado", "florida", "california"];
var wins = 0;
var randomWord = answers[Math.floor(Math.random() * answers.length)];
var guessesLeft = 10;
var guess = [];
var underscores = [];

//converts random word into underscores
for(i = 0; i < randomWord.length; i++) {
    		underscores[i] = "_ "
		}
document.getElementById("word").innerHTML = underscores.join(" ");
console.log(underscores)

console.log(randomWord)

 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();

        //converts the computers random word from string to array
        var computerWord = randomWord.split('');
		

		
        //cycles through word to see if user guessed correct letter
        for (i = 0; i < computerWord.length; i++) {

        	if (letter === computerWord[i]) {

        	
        	underscores.splice(i, 1, letter);
        	
        	console.log(underscores)
          	document.getElementById("word").innerHTML = underscores.join(" ");
  			        
        	} 
        	
        }
        //if letter has already been guessed it prevents anything from happening
        for (i = 0; i < guess.length; i++) {

        	if (letter === guess[i]) {
          	return
          
        	}
        }




        //puts the users guess in the guess array and displays it
        guess.push(letter);
        document.getElementById("alreadyGuessed").innerHTML = guess.join(" ");
        	
        

        //subtracts the guesses left for user & displays guesses left on screen
        guessesLeft--;
        document.getElementById("guessLeft").innerHTML = guessesLeft;
        
       	
       	

        }


