<!DOCTYPE html>
<html>
<head>
	<title>Psychic Game</title>
</head>
<body>
<script type="text/javascript">

//define variables for wins, losses, and guesses left and set starting values
var wins=0
//how do i keep wins from resetting to zero once incremented?
var losses=0
var guessesLeft=9

//define acceptable options
var options=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//function to capture user guess key
document.onkeyup=function(event){
	//determines which key was chosen and converts to lowercase and stores it
	var userGuess=String.fromCharCode(event.keyCode).toLowerCase();
	//prints selection to screen
	alert(userGuess);
	//computer randomly picks a letter
	var computerGuess=options[Math.floor(Math.random()*options.length)];
	console.log(computerGuess);
	//compare user guess to random letter
	//determine if they are the same
	//if the same
	//	increment Wins
	//  display to screen
	if (userGuess==computerGuess){
		(alert("Wow, you ARE a psychic...you guessed correctly!")
		var wins= wins++
		alert("Wins= " + wins);
	}

	//if not the same
		//	decrement Guesses Left
	else{(var guessesLeft=guessesLeft--)
			//	print letters guessed beside words: Your Guesses so far...cannot find how to do this, 
			//  though i know we did it in class

			alert("You incorrectly guessed " userGuess ". You have " guessesLeft "guesses left.")
			//count Guesses Leftcount guesseLeft;
			// When Guesses Left = 0
				//	increment losses
				//	reset guesses left
				//	print to screen: Try Again
				if (guessesLeft=0){
				guessesLeft=9;
				losses++;
				alert:"Try again."
				}
		}

	











//	print to screen: Try Again





}

</script>
</body>
</html><!DOCTYPE html>
<html>
<head>
	<title>Psychic Game</title>
</head>
<body>
<script type="text/javascript">









</script>
</body>
</html>