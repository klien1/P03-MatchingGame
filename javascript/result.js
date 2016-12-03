// Kevin Lien
"use strict";
window.onload = function () {
	let score = getCookie("final-score");
	let finalScoreId = document.getElementById("finalScore");

	//sets score when page loads
	if (score.length == 0){
		score = 0;
	}
	document.getElementById("matchesFound").innerHTML = `Number of Matches: ${score}`;

	//prints message depending on the score
	if (score == 0){
		finalScoreId.innerHTML = `You found no pairs`;
	}//end if no matches
	else if(score == 1){
		finalScoreId.innerHTML = `You found ${score} pair`;
	}//end if one match
	else if (score == 14){
		finalScoreId.innerHTML = `Congratulations! You found all the matching pairs!`;
	}//end if perfect score
	else{
		finalScoreId.innerHTML = `You found ${score} pairs!`;
	}//end if any other score

	//adds link to button Go To Rules that goes to index
	document.getElementById("goToRules").addEventListener("click", ()=>{
		goToUrl("index.html");
	});
	//adds link to button Play Again that goes to game board
	document.getElementById("playAgain").addEventListener("click", ()=>{
		goToUrl("game.html");
	});
};

//function that moves to given url
function goToUrl(url) {
	location.href = url;
}//end goToUrl

//jquery flip hover
$(function () {
	$(".source-card").flip({
		trigger: "hover"
	});
});

//code from w3schools at http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}