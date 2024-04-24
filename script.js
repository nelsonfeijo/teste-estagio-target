function pertenceSequenciaFibonacci() {
    var numero = parseInt(document.getElementById('num').value);
    var resp = document.getElementById('resp');
    let anterior = 0;
    let atual = 1;
    resp.innerHTML = '';

    if (numero === 0 || numero === 1) {
        resp.innerHTML = 'O número informado pertence à sequência de Fibonacci.';
        return;
    }
    for (let valor = anterior + atual; valor <= numero;) {
        if (valor === numero) {
            resp.innerHTML = 'O número informado pertence à sequência de Fibonacci.';
            return;
        }
        anterior = atual;
        atual = valor;
        valor = anterior + atual;
    }
    resp.innerHTML = 'O número informado NÃO pertence à sequência de Fibonacci.'
}

function inverterString() {
    var palavra = document.getElementById('text').value;
    var res = document.getElementById('res');
    res.innerHTML = '';

    var caracteres = palavra.split('');
    var inicio = 0;
    var fim = caracteres.length - 1;

    while (inicio < fim) {
        var temp = caracteres[inicio];
        caracteres[inicio] = caracteres[fim];
        caracteres[fim] = temp;

        inicio++;
        fim--;
    }
    var stringInvertida = caracteres.join('');
    res.innerHTML = `A string invertida é: ${stringInvertida}`
    return stringInvertida;
}



