var frases = [
    {autor: "Charles Chaplin", frase: "A persistência é o caminho do êxito."},
    {autor: "Desconhecido", frase: "No meio da dificuldade encontra-se a oportunidade."},
    {autor: "Paulo Coelho", frase: "Imagine uma nova história para sua vida e acredite nela."},
    {autor: "Henry Ford", frase: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência."}
];

posicao = Math.floor(Math.random() * frases.length + 1);
console.log(posicao);
document.getElementById("frase").innerHTML = '"' + frases[posicao - 1].frase + '"';
document.getElementById("autor").innerHTML = '- ' + frases[posicao - 1].autor;