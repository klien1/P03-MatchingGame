// Kevin Lien

//initialize grid
window.onload = function(){
	let pokemonBG = ["charmander", "squirtle", "bulbasaur", "pikachu", "mew", "eevee", "dratini", "cubone",
					"snorlax", "moltres", "zapdos", "articuno", "sandshrew", "ponyta"];

	let pokemon = pokemonBG.slice().concat(pokemonBG);
	let size = document.getElementById("cards").children.length;

	for (let index = 0; index < size; index++){
		//access front
		document.getElementById("cards").children[index].children[0].classList.add(randomize(pokemon));
		//access back
		document.getElementById("cards").children[index].children[1].classList.add("pokeball");
	}//end for i
	memorize();
};

function memorize(){
	$("#cards").addClass("memorizing");
	window.setTimeout(function(){
		$(".card-grid").flip({
			trigger: "manual"
		}).flip(true);
		$("#cards").removeClass("memorizing");
	}, 20000);
}//end memorize

function stopMemorize(){
	window.clearTimeout(memorize());
	$(".card-grid").flip({
		trigger: "manual"
	}).flip(true);
	$("#cards").removeClass("memorizing");
}

function randomize(array){
	let index = Math.floor(Math.random()*array.length);
	return array.splice(index, 1).toString();
}//end function randomize

function setMouseOver(currentId){
	document.getElementById(currentId).classList.add("border");
}//end function setMouseOver

function setMouseOut(currentId){
	document.getElementById(currentId).classList.remove("border");
}//end function setMouseOut

$(function(){

	let array = [];
	let score = 0;
	let lives = 0;

	$(".card-grid").flip({
		trigger: "manual"
	}).click(function () {
		if (!$("#cards").hasClass("memorizing")) {
			if (array.indexOf("#" + this.id) == -1) {
				$(this).flip(false);
				array.push("#" + this.id);
			}//end if card is currently active
			if (array.length > 1) {
				$("#cards").addClass("memorizing");
				if ($(array[0] + ">:first-child").hasClass($(array[1] + ">:first-child").attr("class"))) {
					$("#cards").removeClass("memorizing");
					$(array[0]).off();
					$(array[1]).off();
					score++;
					console.log(score);
					if (score >= 14) {
						setCookie("final-score", score);
						window.location.href = "result.html";
					}//end if game is over set cookie
				}//end if pokemon class match
				else {
					let ids = array.join(", ");
					window.setTimeout(function () {
						$(ids).flip(true);
						$("#hp" + lives).css("color", "black");
						$("#cards").removeClass("memorizing");
						lives++;
						if (lives >= 3) {
							setCookie("final-score", score);
							window.location.href = "result.html";
						}//end if no more lives set cookie
					}, 1000);
				}//end else
				array.pop();
				array.pop();
			}//end if array has two cards
		}//end flag to disable click
	});
});

//code from w3schools at http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}