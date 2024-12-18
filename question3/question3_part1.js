const fs = require('fs');

const filepath = 'data.txt';

fs.readFile(filepath, 'utf-8', (err, data) => {
    const sums = [];

    function expressao_mul(texto_input) {
        const expressao_soma = /mul\((\d+),(\d+)\)/g;

        let match;
        while ((match = expressao_soma.exec(texto_input)) !== null) {
            const [fullMatch, num1, num2] = match; 
            sums.push({ num1, num2, fullMatch});
        }
    }

    const input_text = data;
    console.log("Dados processados:", input_text);

    expressao_mul(input_text);
    
    var valor_total = 0;

    for(var i = 0; i < sums.length; i++){
        if(Math.abs(sums[i].num1 - sums[i].num2) < 3 || sums[i].num1 - sums[i].num2){
            valor_total += sums[i].num1 * sums[i].num2;
        }            
    }

    console.log("Valor total igual a: " + valor_total);

});
