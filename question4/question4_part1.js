const fs = require('fs');

function buscarPalavraMatriz(matriz, palavra) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const direcoes = [
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 },
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 1, dy: 1 },
        { dx: -1, dy: -1 },
        { dx: 1, dy: -1 },
        { dx: -1, dy: 1 }
    ];

    function verificaDirecao(x, y, dx, dy) {
        let palavraFormada = '';
        for (let i = 0; i < palavra.length; i++) {
            const nx = x + dx * i;
            const ny = y + dy * i;
            if (nx < 0 || ny < 0 || nx >= linhas || ny >= colunas) return false;
            palavraFormada += matriz[nx][ny];
        }
        return palavraFormada === palavra || palavraFormada === palavra.split('').reverse().join('');
    }

    const resultados = [];

    for (let x = 0; x < linhas; x++) {
        for (let y = 0; y < colunas; y++) {
            for (const { dx, dy } of direcoes) {
                if (verificaDirecao(x, y, dx, dy)) {
                    resultados.push({ linha: x, coluna: y, direcao: { dx, dy } });
                }
            }
        }
    }

    return resultados;
}

fs.readFile('data.txt', 'utf-8', (err, data) => {
    const matriz = data.trim().split('\n').map(linha => linha.trim().split(''));

    const palavra = 'XMAS';
    const resultados = buscarPalavraMatriz(matriz, palavra);

    console.log("Quantos foram encontrados:" + (resultados.length)/2); // Bug dele estar cotando duplicado e só dividi por dois para corrigir.
});
