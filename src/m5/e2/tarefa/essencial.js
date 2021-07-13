function prog(){
    
    var select = document.getElementById('language');
	var text = select.options[select.selectedIndex].value;
	console.log(text);
    
    document.getElementById("lang").src = text + ".png";
    
}

function ole() {
    document.getElementById("adamo").innerHTML = "Flwwww";
}

function bomdia() {
    document.getElementById("adamo").innerHTML = "Toca Aqui!";
}