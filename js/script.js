let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user_score');
const cpuScore_span = document.getElementById('cpu_score');
const scorePorde_span = document.querySelector('.score_bord');
const result_div = document.querySelector('.result > h2');

const rock_span = document.getElementById('r');
const paper_span = document.getElementById('p');
const scissors_span = document.getElementById('s');

/* Computer Fucntion */
function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber]

}
function converToWords(letters) {
	if (letters === "r") return "Rock";
		if (letters === "p") return "Paper";
		else
		return "scissors"

		
	
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	cpuScore_span.innerHTML = cpuScore;
	const userFontSize = "User".fontsize(3).sub()
	const cpuFontSize = "User".fontsize(3).sub()
	result_div.innerHTML = converToWords(userChoice)+ userFontSize + " Beats " + converToWords(computerChoice) + cpuFontSize + " You wins.." + "  &#128165"
	document.getElementById(userChoice).classList.add('green_glue')
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green_glue')},1200)

}

function lose(userChoice, computerChoice){
	console.log("lost")
	cpuScore++;
	userScore_span.innerHTML = userScore;
	cpuScore_span.innerHTML = cpuScore;
	const userFontSize = "User".fontsize(3).sub()
	const cpuFontSize = "User".fontsize(3).sub()
		result_div.innerHTML = converToWords(userChoice)+ userFontSize + "Weak Against The  " + converToWords(computerChoice) + cpuFontSize + " You Lost.." + "  💩"
		document.getElementById(userChoice).classList.add('red_glue')
		setTimeout(function() {document.getElementById(userChoice).classList.remove('red_glue')},1200)

}

function draw(userChoice, computerChoice){
	console.log("draw")

	userScore_span.innerHTML = userScore;
	cpuScore_span.innerHTML = cpuScore;
	const userFontSize = "User".fontsize(3).sub()
	const cpuFontSize = "User".fontsize(3).sub()
	result_div.innerHTML = converToWords(userChoice)+ userFontSize + " = " + converToWords(computerChoice) + cpuFontSize + " Its a Draw" + " &#128579"

	

}
/* User Function ||  user and computer Choices*/
function game(userChoice) {
	const computerChoice =getComputerChoice();
	switch (userChoice + computerChoice) {
		case "sp":
		case "pr":
		case "rs":
		win(userChoice, computerChoice);
		break;

		case "ps":
		case "rp":
		case "sr":
		lose(userChoice, computerChoice);
		break;

		case "rr":
		case "ss":
		case "pp":
		draw();
		break;
	}

}

function main() {
rock_span.addEventListener ('click', function()  {

game("r")

});

paper_span.addEventListener ('click', function()  {

game("p")

});

scissors_span.addEventListener ('click', function()  {

game("s")

});

/* this is for main fucntion*/
}
main ();