const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {

  const matriz = data.trim().split('\n').map(linha => linha.trim().split(''));

  const antenas = [];

  function dentroDosLimites(x, y, matriz) {
    return x >= 0 && x < matriz.length && y >= 0 && y < matriz[0].length;
  }

  // Capturar todas as antenas e suas posições
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== '.') {
        antenas.push({
          tipo: matriz[i][j],
          x: i,
          y: j,
        });
      }
    }
  }

  const antinodos = new Set();

  // Calcular os antinodos para cada antena
  for (let i = 0; i < antenas.length; i++) {
    for (let j = i + 1; j < antenas.length; j++) {
      if (antenas[i].tipo === antenas[j].tipo) {
        const dx = antenas[j].x - antenas[i].x;
        const dy = antenas[j].y - antenas[i].y;

        // Adicionar os antinodos simétricos
        const antinodo1 = `${antenas[j].x + dx},${antenas[j].y + dy}`;
        const antinodo2 = `${antenas[i].x - dx},${antenas[i].y - dy}`;

        if (dentroDosLimites(antenas[j].x + dx, antenas[j].y + dy, matriz)) {
          antinodos.add(antinodo1);
        }

        if (dentroDosLimites(antenas[i].x - dx, antenas[i].y - dy, matriz)) {
          antinodos.add(antinodo2);
        }
      }
    }
  }

  console.log("Quantidade de antinodos:", antinodos.size);

});
