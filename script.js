// parte 1 - conversão js
// km - milha
function kmParaMilha(km){
    return km * 1.60934
}function MilhaParaKm(milha){
    return milha / 1.60934
}

// pés - metros
function pesParaMetros(pes){
    return pes * 0.3048 
}function metrosParaPes(metros){
    return metros / 0.3048
}

// polegada pra centimetro
function polegadaParaCentimetros(polegada){
    return polegada * 2.54
}function centimetrosParaPolegada(centimetros){
    return centimetros / 2.54
}

module.exports = {
    kmParaMilha,
    MilhaParaKm,
    pesParaMetros,
    metrosParaPes,
    polegadaParaCentimetros,
    centimetrosParaPolegada
}