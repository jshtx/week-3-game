//initially declare variables and arrays

var wins = 0;
var losses = 0;
var counter = 0;
var guessesLeft = 10;
var guess = [];
var underscores = [];


var answers = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", 
				"connecticut", "delaware", "florida", "georgia", "hawaii",
				"idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", 
				"louisiana", "maine", "maryland", "massachusetts", "michigan",
				"minnesota", "mississippi", "missouri", "montana", "nebraska",
				"nevada", "ohio", "oklahoma", "oregon", "pennsylvania", "tennessee",
				"texas", "utah", "vermont", "virginia", "washington", "wisconsin",
				"wyoming"];
//randomly selects a word from the array answers
var randomWord = answers[Math.floor(Math.random() * answers.length)];
console.log(randomWord)
//converts random word into underscores
for(i = 0; i < randomWord.length; i++) {
    		underscores[i] = "_"
			
//displays the correctly guessed letters		
document.getElementById("word").innerHTML = underscores.join(" ");
}

//function to reset the game after a win or loss
var resetGame = function(){

	counter = 0; //resets counter to 0
	guessesLeft = 10; //resets number of guesses left to 10
	document.getElementById("guessLeft").innerHTML = guessesLeft;
	
	guess = []; //resets the guess array to empty
	document.getElementById("alreadyGuessed").innerHTML = guess.join(" ");

	underscores = []; //resets the underscores to
	
	//selects a random word
	randomWord = answers[Math.floor(Math.random() * answers.length)];
	console.log(randomWord)
	console.log(counter)
	//converts random word into underscores
	for(i = 0; i < randomWord.length; i++) {
    			underscores[i] = "_"
			


//displays the correctly guessed letters		
document.getElementById("word").innerHTML = underscores.join(" ");
}

}

//when a key is hit by user all this is operated
 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();

        //converts the computers random word from string to array
        var computerWord = randomWord.split('');
		var counter2 = 0;

		
        //cycles through word to see if user guessed correct letter
        for (i = 0; i < computerWord.length; i++) {

        	if (letter === computerWord[i]) {
        	counter2++;
        	console.log(counter2)
        		//if letter has already been guessed it prevents anything from happening
        	for (j = 0; j < guess.length; j++) {

        	if (letter === guess[j]) {
          	return
          
        	}
        }

        	counter2

        	//replaces the underscores with the correctly guessed letter
        	underscores.splice(i, 1, letter);
        	
        	//displays the underscores and correctly guessed letters
        	console.log(underscores)
          	document.getElementById("word").innerHTML = underscores.join(" ");
  			
          	
  				//adds to counter
  				counter++;    
  				console.log(counter)
  				
        	} 
        	
        }
        




        //puts the users guess in the guess array and displays it
        guess.push(letter);
        document.getElementById("alreadyGuessed").innerHTML = guess.join(" ");
        	
        
        if (counter2 === 0 ){
        //subtracts the guesses left for user & displays guesses left on screen
        guessesLeft--;
        document.getElementById("guessLeft").innerHTML = guessesLeft;
        counter2 = 0;
        console.log(counter2)
        }
 		//ends game if no guess are left
 		if (guessesLeft == 0) {
 			losses++;
 			document.getElementById("losses").innerHTML = losses;
 			resetGame();
 			
 			console.log(losses)		
 		}
 		if (counter == computerWord.length ){
 			wins++;
 			
 			resetGame();
 			document.getElementById("wins").innerHTML = wins;
 			console.log(wins)
 		}     	
       	

        }



