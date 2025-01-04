const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n').map(line => {
    const [target, numbers] = line.split(':');
    return {
      target: parseInt(target.trim()),
      numbers: numbers.trim().split(' ').map(Number)
    };
  });

  function avaliarEsquerdaParaDireita(expressao) {
    const tokens = expressao.split(' ');
    let resultado = parseInt(tokens[0], 10);
  
    for (let i = 1; i < tokens.length; i += 2) {
      const operador = tokens[i];
      const numero = parseInt(tokens[i + 1], 10);
  
      if (operador === '+') resultado += numero;
      if (operador === '*') resultado *= numero;
<<<<<<< HEAD
=======
      if (operador === '||') resultado = parseInt(resultado.toString() + numero.toString());
>>>>>>> 6dc39d9c1c78a8d2508b9a0358869b3e553efe26
    }
  
    return resultado;
  }
  
<<<<<<< HEAD
  const resultado = avaliarEsquerdaParaDireita("11 + 6 * 16 + 20");
  
  console.log("resultado igual a: " + resultado); 

  console.log(lines[0].numbers);
=======
  //const resultado = avaliarEsquerdaParaDireita("11 + 6 * 16 + 20");
  
  //console.log("resultado igual a: " + resultado); 

  //console.log(lines[0].numbers);
>>>>>>> 6dc39d9c1c78a8d2508b9a0358869b3e553efe26

  function gerar_operacao(numeros, operadores) {
    const expressoes = [];

    for (let combinacoes of operadores) {
      let expressao = numeros[0].toString();
      for (let i = 0; i < combinacoes.length; i++) {
        expressao += ` ${combinacoes[i]} ${numeros[i + 1]}`;
      }
      expressoes.push(expressao);
    }

    return expressoes;
  }

  function gerar_combinacoes(n) {
<<<<<<< HEAD
    const operadores = ['*', '+'];
=======
    const operadores = ['*', '+', '||'];
>>>>>>> 6dc39d9c1c78a8d2508b9a0358869b3e553efe26
    const combinacoes = [];

    function backtrack(path) {
      if (path.length === n) {
        combinacoes.push([...path]);
        return;
      }
      for (let op of operadores) {
        path.push(op);
        backtrack(path);
        path.pop();
      }
    }

    backtrack([]);
    return combinacoes;
  }

  const teste = gerar_combinacoes(3);
  console.log(teste);

  const teste2 = gerar_operacao(lines[8].numbers, teste);
  console.log(teste2);
  let valor_total = 0;

for (let i = 0; i < lines.length; i++) {
<<<<<<< HEAD
  console.log("Valor de i: " + i);
=======
  //console.log("Valor de i: " + i);
>>>>>>> 6dc39d9c1c78a8d2508b9a0358869b3e553efe26
  const combinacoes = gerar_combinacoes(lines[i].numbers.length - 1);
  const operacoes = gerar_operacao(lines[i].numbers, combinacoes);

  for (let j = 0; j < operacoes.length; j++) {
    const resultado = avaliarEsquerdaParaDireita(operacoes[j]);
    if (resultado === lines[i].target) {
      valor_total += lines[i].target;
<<<<<<< HEAD
      console.log("novo valor total: " + i + " posicao com valor: " + lines[i].target);
=======
      //console.log("novo valor total: " + i + " posicao com valor: " + lines[i].target);
>>>>>>> 6dc39d9c1c78a8d2508b9a0358869b3e553efe26
      break;
    }
  }
}

  
  console.log("Valor total igual a: " + valor_total);
  
});