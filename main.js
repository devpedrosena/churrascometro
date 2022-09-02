function calc(){

    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");

    let criancas = inputCriancas.value;
    let adultos = inputAdultos.value;
    let duracao = inputDuracao.value;
    let totalCarne;
    let totalCerveja;
    let totalAguaErefri;

    totalCarne = (carne(duracao) * adultos) + (carne(duracao) / 2) * criancas;
    totalCerveja = (cerveja(duracao) * adultos) + (cerveja(duracao) / 2) * criancas;
    totalAguaErefri = (aguaErefri(duracao) * adultos) + (aguaErefri(duracao) / 2)  * criancas;

    msg(totalCarne, totalCerveja,totalAguaErefri);
}

function msg(totalCarne,totalCerveja,totalAguaErefri){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Você vai precisar de: ${totalCarne}kg de carne</p>`;
    resultado.innerHTML += `<p>${totalCerveja}ml de cerveja</p>`;
    resultado.innerHTML += `<p>${totalAguaErefri}ml de refri ou água.</p>`;
}

function aguaErefri(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function cerveja(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function carne(qntd){
    if(qntd >= 6){
        return 0.650;
    }else{
        return 0.400;
    }
}