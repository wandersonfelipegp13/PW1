 var cartas = [ 0, 0, 0, 0, 0, 0 ];

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

