const visor = document.getElementById('visor');

function adicionarValor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = 'Erro';
    }
}