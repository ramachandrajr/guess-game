// Create secret number.
var secretNumber = Math.floor(Math.random() * 100);
rightAnswer = false;
// Iterate until the right answer is true
while (rightAnswer === false) {

	// Ask user to guess.
	var guess = prompt("Guess a number");
	var guessNum = Number(guess);


	// Check if guess is right.
	if (guessNum === secretNumber) {
		alert("YOU GOT IT RIGHT");
		rightAnswer = true;
	}
	// Otherwise, check if higher
	else if (guessNum > secretNumber) {
		alert("Too high. Guess again.");
		rightAnswer = false;
	}
	// Otherwise, check if lower
	else if (guessNum < secretNumber) {
		alert("Too less. Guess again.");
		rightAnswer = false;
	}
	// If user wants to exit.
	else if (guess === "x") {
		alert("Thanks for playin.");
		rightAnswer = true;
	}
	else {
		alert("You can only use numbers");
		rightAnswer = false;
	}

}