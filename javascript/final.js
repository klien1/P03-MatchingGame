// Kevin Lien

//initialize grid
window.onload = function(){
	let pokemonBG = ["charmander", "squirtle", "bulbasaur", "pikachu", "mew", "eevee", "dratini", "cubone",
					"snorlax", "moltres", "zapdos", "articuno", "sandshrew", "ponyta"];

	let pokemon = pokemonBG.slice().concat(pokemonBG);
	let size = document.getElementById("cards").children.length;

	for (let index = 0; index < size; index++){
		document.getElementById("cards").children[index].children[0].classList.add(randomize(pokemon));
		document.getElementById("cards").children[index].children[1].classList.add("pokeball");
	}//end for i

	$("#cards").addClass("memorizing");
	window.setTimeout(function(){
		$(".card-grid").flip({
			trigger: "manual"
		}).flip(true);
		$("#cards").removeClass("memorizing");
	}, 5000);
};

function randomize(array){
	let index = Math.floor(Math.random()*array.length);
	return array.splice(index, 1).toString();
}

function setMouseOver(currentId){
	document.getElementById(currentId).classList.add("border");
}

function setMouseOut(currentId){
	document.getElementById(currentId).classList.remove("border");
}
