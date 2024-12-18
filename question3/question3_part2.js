const exp = require('constants');
const fs = require('fs');

const filepath = 'data.txt';

fs.readFile(filepath, 'utf-8', (err, data) => {
    
    function expressao_mul(texto_input) {
        const results = [];        
        const expressao = /do(?:n't)?\(\)|mul\((\d+),(\d+)\)/g;
        
        let match;
        while((match = expressao.exec(texto_input)) !== null){
            if(match[0].startsWith("mul")){
                const [fullMatch, num1, num2] = match; 
                results.push({ type: "mul", num1: Number(num1), num2: Number(num2), fullMatch });    
            } else {
                results.push({type: "command", value: match[0]});
            }
        }

        return results;
    }

    const input_text = data;
    
    // console.log("Dados processados:", input_text);

    const results = expressao_mul(input_text);

    // console.log(results);
        
    var multiplica = true;

    valor_total = 0;

    
    for(var i = 0; i < results.length; i++){
        if(results[i].value == "don't()"){
            multiplica = false;
        } else if (results[i].value == "do()"){
            multiplica = true;
        }

        if(multiplica){
            if(Math.abs(results[i].num1 - results[i].num2) < 3 || results[i].num1 - results[i].num2){
                valor_total += results[i].num1 * results[i].num2;
            }                
        }
    }

    console.log("Valor total igual a: " + valor_total);

});
