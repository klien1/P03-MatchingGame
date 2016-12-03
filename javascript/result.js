// Kevin Lien
window.onload = function () {
	let score = getCookie("final-score");
	let finalScoreId = document.getElementById("finalScore");

	document.getElementById("matchesFound").innerHTML = `Number of Matches: ${score}`;

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

	document.getElementById("goToRules").addEventListener("click", ()=>{
		goToUrl("index.html");
	});
	document.getElementById("playAgain").addEventListener("click", ()=>{
		goToUrl("game.html");
	});
};

function goToUrl(url) {
	location.href = url;
}//end goToUrl

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