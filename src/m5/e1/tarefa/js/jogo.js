 var cartas = [ 0, 0, 0, 0, 0, 0 ];
 var acerto = [ 0, 0, 0, 0, 0, 0 ];
 var viradas = 0;
 
embaralha();

function embaralha() {
    
    var i;
    for (i = 0; i < cartas.length; i++) {
        var loop = true;
        var ok = false;
        var repitidos = 0 ;
        var num;
        while (loop) {
            num = Math.floor(Math.random() * 3 + 1);
            for (let value of cartas) {
                if (value == num) {
                    repitidos++;
                    if (repitidos > 1) {
                        ok = false;
                        break;
                    }
                } else {
                    ok = true;
                }
            }
            if (ok) {
                // loop = false;
                break;
            }
        }
        cartas[i] = num;
    }
    
}

function vira(carta) {
    
    viradas++;
    
    var c = document.getElementsByTagName("img");
    
    for (var z = 0; z < cartas.length; z++) {
        c[z].src = "img/star.png";
    }
    
    if (carta == 1) {
        document.getElementById("carta1").src = "img/star.png";
    } else if (carta == 2) {
        document.getElementById("carta1").src = "img/ray.png";
    } else {
       document.getElementById("carta1").src = "img/core.png";
    }
  
}

function pontuacao() {
    if (viradas == 3) {
        desvira();
        viradas = 0;
    }
}

function desvira() {
    for(var cont = 0; cont < acerto.length; cont++) {
        if (acerto[cont] == 0) {
            document.getElementById("carta" + (cont + 1) ).src = "img/costas.png";
        }
    }
}