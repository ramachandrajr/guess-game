// Create secret number
var secretNumber = Math.floor(Math.random() * 100);
console.log(secretNumber);

var times = 0;

// Get answer from the input when button is 
function submitAnswer () {
	times++;
	var input = document.getElementById("number");
	var guess = Number(input.value);
	var chat = document.getElementById("mini-says");
	
	if (guess === secretNumber) {
		chat.innerHTML = "Bob: You got it! Bananaaaaaa";
		// Disable the submit button.
		document.getElementById("hitIt").className += " disabled";
	}
	else if (guess < secretNumber) {
		chat.innerHTML = "Bob: Well thats a bit low boss! Keep Tryin.";
	}
	else if (guess > secretNumber) {
		chat.innerHTML = "Bob: Well thats a bit high!! Keep Tryin.";
	}
	else {
		chat.innerHTML = "Bob: I guess you should use a number.";
	}
}

function reloadGame(){
	location.reload();
	submitAnswer();
}

function giveUp() {
	var chat = document.getElementById("mini-says");
	chat.innerHTML = "Bob: The number is " + secretNumber;
	location.reload();
}
