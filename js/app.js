function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
    let campoPista = document.getElementById("qtd-pista");
    let campoSuperior = document.getElementById("qtd-superior");
    let campoInferior = document.getElementById("qtd-inferior");


    if (tipoIngresso == 'pista') {
        if (totalPista == 0) {
            mensagemIngressoEsgotado()
        } else {
            if (totalPista - quantidadeIngresso < 0) {
                mensagemIngressoIndisponivel()
            } else {
                totalPista = totalPista - quantidadeIngresso;
                campoPista.textContent = totalPista;
            }
        }
    }

    if (tipoIngresso == 'superior') {
        if (totalSuperior == 0) {
            mensagemIngressoEsgotado()
        } else {
            if (totalSuperior - quantidadeIngresso < 0) {
                mensagemIngressoIndisponivel()
            } else {
                totalSuperior = totalSuperior - quantidadeIngresso;
                campoSuperior.textContent = totalSuperior;
            }
        }
    }

    if (tipoIngresso == "inferior") {
        if (totalInferior == 0) {
            mensagemIngressoEsgotado()
        } else {
            if (totalInferior - quantidadeIngresso < 0) {
                mensagemIngressoIndisponivel()
            } else {
                totalInferior = totalInferior - quantidadeIngresso;
                campoInferior.textContent = totalInferior;
            }
        }
    }
}

function mensagemIngressoEsgotado() {
    alert('Ingressos Esgotados')
}

function mensagemIngressoIndisponivel() {
    alert('Quantidade solicitada maior que a disponível')
}

let totalPista = parseInt(document.getElementById('qtd-pista').textContent);
let totalSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let totalInferior = parseInt(document.getElementById('qtd-inferior').textContent); 