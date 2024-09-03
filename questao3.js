const faturamento = require('./questao3.json') // usando JSON
const fat = faturamento; //apenas para simplificar a escrita


function calculoFaturamento(fat){ //Fiz em uma unica função, pois pelo que interpretei o programa deve fazer as 3 'funções' ao mesmo tempo sempre. Assim evitando que percorra a array diversas vezes e perdendo tempo.
    var menor = { dia: -1, valor: 999999999999999}
    var maior = { dia: -1, valor: -1}
    var media = []
    
    fat.forEach(element => {

        if(element.valor < menor.valor & element.valor !=0){ // sempre pegando o menor valor
            menor.valor = element.valor;
            menor.dia = element.dia;
        }

        if(element.valor > maior.valor & element.valor !=0){ // sempre pegando o maior valor
            maior.valor = element.valor;
            maior.dia = element.dia;
        }

        if(element.valor != 0){ // sempre pegando os valores que não são zero
            media.push(element.valor);
        }

    });

    let valorMedia = 0;

    for(let i=0; i<media.length; i++){ // poderia usar o reduce mas foi pedido para evitar usar funçoes prontas
        valorMedia += media[i];
    }

    valorMedia = valorMedia/media.length // fazendo a média
    let dias = 0;

    fat.forEach(element => {  // pegando o numero de dias que o valor recebido foi maior que a média
        if(element.valor > valorMedia){
            dias++;
        }
    });

    return `${menor.valor}, ${maior.valor}, ${dias}`  // retorna respectivamente o menor valor do mes, o maior valor do mes e o número de dias que o valor superou a média mensal.
    
}

console.log(calculoFaturamento(fat)) 