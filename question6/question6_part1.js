const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {

  const lines = data.split('\n').map(line => line.split(''));
  console.table(lines);

  let posicaoAtual = null;
  for (let i = 0; i < lines.length; i++) {
    const index = lines[i].indexOf('^');
    if (index !== -1) {
      posicaoAtual = [i, index];
      break;
    }
  }

  const direcoes = ['↑', '→', '↓', '←'];
  const movimentos = {
    '↑': [-1, 0],
    '→': [0, 1],
    '↓': [1, 0],
    '←': [0, -1]
  };

  let direcaoAtual = 0;

  let movimentosRealizados = 0;
  let continuarAndando = true;

  function mover_se() {
    const [dx, dy] = movimentos[direcoes[direcaoAtual]];
    const novaLinha = posicaoAtual[0] + dx;
    const novaColuna = posicaoAtual[1] + dy;

    if (novaLinha >= 0 && novaLinha < lines.length && novaColuna >= 0 && novaColuna < lines[0].length) {
      if (lines[novaLinha][novaColuna] !== '#') {
        lines[posicaoAtual[0]][posicaoAtual[1]] = 'X';
        posicaoAtual = [novaLinha, novaColuna];
        lines[posicaoAtual[0]][posicaoAtual[1]] = '^';
      } else {
        direcaoAtual = (direcaoAtual + 1) % direcoes.length;
      }
    } else {
      continuarAndando = false;
    }
  }

  // Verificar se não há mais movimentos possíveis
  function verificarMovimentoPossivel() {
    for (const dir of direcoes) {
      const [dx, dy] = movimentos[dir];
      const novaLinha = posicaoAtual[0] + dx;
      const novaColuna = posicaoAtual[1] + dy;
      if (novaLinha >= 0 && novaLinha < lines.length && novaColuna >= 0 && novaColuna < lines[0].length && lines[novaLinha][novaColuna] !== '#') {
        return true;
      }
    }
    return false;
  }

  while (continuarAndando) {
    if (!verificarMovimentoPossivel()) {
      continuarAndando = false;
    } else {
      mover_se();
      // console.table(lines);
    }
  }

  let contagemX = 0;
  for(let i = 0; i < lines.length; i++){
    for(let j = 0; j < lines[i].length; j++){
      if(lines[i][j] == 'X'){
        contagemX++
      }
    }
  }
  console.log(`Movimentos realizados: ${contagemX + 1}`);
});
