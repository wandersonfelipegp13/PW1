 var cartas = [ 0, 0, 0, 0, 0, 0 ];
 var acerto = [ 0, 0, 0, 0, 0, 0 ];
 var viradas = 0;
 
 var pontos = 0;
 var carta1 = 0;
 var carta2 = 0;

embaralha();

function embaralha() {
    
    var i;
    for (i = 0; i < cartas.length; i++) {
        var loop = true;
        var ok = false;
        var num;
        while (loop) {
            num = Math.floor(Math.random() * 6 + 1);
            for (var j = 0; j < cartas.length; j++) {
                if (cartas[j] == num) {
                    ok = false;
                    break;
                } else {
                    ok = true;
                }
            }
            if (ok) {
                loop = false;
                break;
            }
        }
        cartas[i] = num;
    }
    
}

function vira(carta) {
    
    viradas++;
    
    if (carta1 == 0) {
        carta1 = carta;
    } else {
        carta2 = carta;
    }
    
    if (carta1 == carta2) {
        pontos++;
        acerto[carta] = 1;
        acerto[carta] = 1;
    }
    
    if (carta == 0) {
        document.getElementById("carta1").src = "img/" + cartas[carta] + ".png";
    } else if (carta == 1) {
        document.getElementById("carta2").src = "img/" + cartas[carta] + ".png";
    } else if (carta == 2) {
        document.getElementById("carta3").src = "img/" + cartas[carta] + ".png";
    } else if (carta == 3) {
        document.getElementById("carta4").src = "img/" + cartas[carta] + ".png";
    } else if (carta == 4) {
        document.getElementById("carta5").src = "img/" + cartas[carta] + ".png";
    } else if (carta == 5) {
        document.getElementById("carta6").src = "img/" + cartas[carta] + ".png";
    }
    
    pontuacao();
  
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