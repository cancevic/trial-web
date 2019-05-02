function changeImage (event) {
	
	event = event || window.event;
	
	var targetElement = event.target || event.srcElement; 
	
	if (targetElement.tagName == "IMG") {
		document.getElementById("mainImg").src = targetElement.getAttribute("src");
	}
}

/*https://www.youtube.com/watch?v=Dc2WHsuiXos
kudvenkat
*/