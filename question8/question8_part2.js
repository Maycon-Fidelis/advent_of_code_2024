const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const matriz = data.trim().split('\n').map(linha => linha.trim().split(''));

  const antenas = [];

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

  // Adicionar as próprias posições das antenas como antinodos
  for (const antena of antenas) {
    antinodos.add(`${antena.x},${antena.y}`);
  }

  // Calcular os antinodos para cada par de antenas
  for (let i = 0; i < antenas.length; i++) {
    for (let j = i + 1; j < antenas.length; j++) {
      if (antenas[i].tipo === antenas[j].tipo) {
        const dx = antenas[j].x - antenas[i].x;
        const dy = antenas[j].y - antenas[i].y;

        // Adicionar todos os pontos alinhados ao longo da linha entre as duas antenas
        for (let k = 1; ; k++) {
          const x1 = antenas[j].x + dx * k;
          const y1 = antenas[j].y + dy * k;
          const x2 = antenas[i].x - dx * k;
          const y2 = antenas[i].y - dy * k;

          const dentroLimites1 = dentroDosLimites(x1, y1, matriz);
          const dentroLimites2 = dentroDosLimites(x2, y2, matriz);

          if (!dentroLimites1 && !dentroLimites2) break;

          if (dentroLimites1) {
            antinodos.add(`${x1},${y1}`);
          }

          if (dentroLimites2) {
            antinodos.add(`${x2},${y2}`);
          }
        }
      }
    }
  }

  console.log("Quantidade de antinodos:", antinodos.size);

  function dentroDosLimites(x, y, matriz) {
    return x >= 0 && x < matriz.length && y >= 0 && y < matriz[0].length;
  }
});
