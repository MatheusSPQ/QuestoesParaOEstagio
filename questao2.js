function fib(numeroQuestionado){
    if(numeroQuestionado == 0){
        return "Pertence a sequência";
    }
    var penultimo = 0
    var ultimo = 1
    var proximo = 0;
    while(ultimo <= numeroQuestionado){
        proximo = penultimo + ultimo;
        if(proximo == numeroQuestionado){
            return "Pertence a sequência";
        }
        penultimo = ultimo;
        ultimo = proximo;
        proximo = 0;
    }
    return "Não pertence a sequência";
}

var numeroDesejado = 610 //coloca o número que você quer saber se pertence a sequência.

console.log(fib(numeroDesejado))