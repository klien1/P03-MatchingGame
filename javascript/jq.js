// Kevin Lien
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
			}
			console.log("before", array);
			if (array.length > 1) {
				$("#cards").addClass("memorizing");
				if ($(array[0] + ">:first-child").hasClass($(array[1] + ">:first-child").attr("class"))) {
					$("#cards").removeClass("memorizing");
					$(array[0]).off();
					$(array[1]).off();
					score++;
					if (score >= 24) {
						setCookie("final-score", score);
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
							window.location.href = "result.html";
						}//end if no more lives

					}, 1000);
				}//end else
				array.pop();
				array.pop();
				console.log("after", array);
			}
		}
	});

});


//code from w3schools at http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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