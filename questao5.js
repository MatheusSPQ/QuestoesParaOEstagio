var palavra = "estagiario bom demais 12345" // insira uma string que deseja que seja invertida

function inverte(string){
    var invertida = '';
    for (let i = string.length-1; i >= 0; i--) {
        invertida += string[i]
    }
    return invertida;
}

console.log(inverte(palavra))