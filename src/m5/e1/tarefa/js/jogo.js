 
var cartas = [ 0, 0, 0, 0, 0, 0 ];
var acerto = [ 0, 0, 0, 0, 0, 0 ];
var viradas = 0;
 
embaralha();

function embaralha() {
    
    for (var i = 0; i < cartas.length; i++) {
        var ok = false;
        var num;
        while (true) {
            var repitidos = 0;
            num = Math.floor(Math.random() * 3 + 1);
            for (let carta of cartas) {
                if (carta == num) {
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
                break;
            }
        }
        cartas[i] = num;
    }
    
}

function vira(carta, element) {
    
    // viradas++;
    element.src = pickImage(cartas[carta - 1]);
    console.log("Carta: " + carta + ", Posição: " + cartas[carta - 1]);
  
}

function pickImage(posicao){
    
    var caminho = "img/";
    if(posicao == 1)
        caminho += "star";
    else if(posicao == 2)
        caminho += "ray";
    else
        caminho += "core";

    return caminho + ".png";
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