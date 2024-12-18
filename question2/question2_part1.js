const fs = require('fs');

const filepath = 'data.txt';

function aumenta_ou_diminui(array) {
    let aumento = false;
    let diminui = false;
    let repete_numero = false;


    for (let k = 0; k < array.length - 1; k++) {
        if (array[k] === array[k + 1]) {
            repete_numero = true;
        } else if (array[k] < array[k + 1]) {
            aumento = true;
        } else if (array[k] > array[k + 1]) {
            diminui = true;
        }
    }

    if (repete_numero) {
        return "repete_numero";
    } else if (aumento && diminui) {
        return "aumenta_diminui";
    } else if (aumento) {
        return "aumenta";
    } else if (diminui) {
        return "diminui";
    }
}

fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err.message);
        return;
    }

    console.log("Conteúdo do arquivo lido com sucesso.");

    const dataArray = data
        .trim()
        .split("\n")
        .map(line => line.trim().split(" ").map(Number));

    console.log("Dados processados:", dataArray);

    let inseguro = 0;
    let seguro = dataArray.length;

    for (let i = 0; i < dataArray.length; i++) {
        let eInseguro = false;

        const resultado = aumenta_ou_diminui(dataArray[i]);

        if (resultado == "repete_numero") {
            eInseguro = true;
        } else if (resultado == "aumenta_diminui") {
            eInseguro = true;
        } else if (resultado == "aumenta" || resultado == "diminui") {
            for (let j = 0; j < dataArray[i].length - 1; j++) {
                if (Math.abs(dataArray[i][j] - dataArray[i][j + 1]) > 3) {
                    eInseguro = true;
                    break;
                }
            }
        }

        if (eInseguro) {
            console.log(`Linha ${i + 1} é insegura.`);
            inseguro++;
        } else {
            console.log(`Linha ${i + 1} é segura.`);
        }
    }

    seguro -= inseguro;

    console.log("\nResultados finais:");
    console.log("Linhas seguras: " + seguro);
    console.log("Linhas inseguras: " + inseguro);
});
