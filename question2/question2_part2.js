const fs = require('fs');

const filepath = 'data.txt';

function verificaSeguranca(array) {
    let aumento = false;
    let diminui = false;

    for (let i = 0; i < array.length - 1; i++) {
        const diferenca = Math.abs(array[i] - array[i + 1]);
        if (diferenca < 1 || diferenca > 3) {
            return "inseguro";
        }
        if (array[i] < array[i + 1]) {
            aumento = true;
        } else if (array[i] > array[i + 1]) {
            diminui = true;
        }
    }

    if (aumento && diminui) {
        return "inseguro";
    }
    return "seguro";
}

function verificaSegurancaComDampener(array) {
    if (verificaSeguranca(array) === "seguro") {
        return true;
    }

    for (let i = 0; i < array.length; i++) {
        const arrayModificado = array.slice(0, i).concat(array.slice(i + 1));
        if (verificaSeguranca(arrayModificado) === "seguro") {
            return true;
        }
    }

    return false;
}

fs.readFile(filepath, 'utf-8', (err, data) => {
    const dataArray = data
        .trim()
        .split("\n")
        .map(line => line.trim().split(" ").map(Number));

    console.log("Dados processados:", dataArray);

    let seguro = 0;
    let inseguro = 0;

    for (let i = 0; i < dataArray.length; i++) {
        const resultado = verificaSegurancaComDampener(dataArray[i]);

        if (resultado) {
            console.log(`Linha ${i + 1} é segura.`);
            seguro++;
        } else {
            console.log(`Linha ${i + 1} é insegura.`);
            inseguro++;
        }
    }

    console.log("\nResultados finais:");
    console.log("Linhas seguras:", seguro);
    console.log("Linhas inseguras:", inseguro);
});
