let faturamentoMensal = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53,
}

function porcentagem(fat){
    let total = fat.sp+fat.rj+fat.mg+fat.es+fat.outros

    let porcentagemFaturamento = {
        sp: `%${((fat.sp/total)*100).toFixed(2)}`,
        rj: `%${((fat.rj/total)*100).toFixed(2)}`,
        mg: `%${((fat.mg/total)*100).toFixed(2)}`,
        es: `%${((fat.es/total)*100).toFixed(2)}`,
        outros: `%${((fat.outros/total)*100).toFixed(2)}`
    }
    
    return porcentagemFaturamento
}

console.log(porcentagem(faturamentoMensal))